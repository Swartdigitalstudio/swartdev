<?php

namespace BitCode\BitForm\Frontend\Form;

use BitCode\BitForm\Admin\Form\FrontEndScriptGenerator;
use BitCode\BitForm\Core\Database\FormEntryMetaModel;
use BitCode\BitForm\Core\Database\FormModel;
use BitCode\BitForm\Core\Form\FormManager;
use BitCode\BitForm\Core\Integration\IntegrationHandler;
use BitCode\BitForm\Core\Util\FieldValueHandler;
use BitCode\BitForm\Core\Util\FileDownloadProvider;
use BitCode\BitForm\Core\Util\FrontendHelpers;
use BitCode\BitForm\Core\Util\Utilities;
use BitCode\BitForm\Core\WorkFlow\WorkFlow;
use BitCode\BitFormPro\Admin\FormSettings\FormAbandonment;

final class FrontendFormHandler
{
  public function __construct()
  {
    // before markup load - formids [], posts [1,2]
    add_action('wp_enqueue_scripts', [$this, 'loadAssets']);
    // markup loads - formids []
    add_shortcode('bitform', [$this, 'handleFrontendRenderRequest']);
    // after markup load - formids [1,35,3]
    add_action('wp_footer', [$this, 'generateJS']);
  }

  private function validPassowordResetToken($token, $userID, $formId)
  {
    $existResetInteg = (new IntegrationHandler($formId))->getAllIntegration('wp_user_auth', 'wp_auth', 1);
    if (!is_wp_error($existResetInteg) && count($existResetInteg) > 0) {
      if ('reset' === $existResetInteg[0]->integration_name) {
        $user = get_userdata($userID);
        if ($user) {
          $validKey = check_password_reset_key($token, $user->user_login);
          if (is_wp_error($validKey)) {
            echo "<div id='bf-resp' style='display:grid;justify-content:center;color:#860000;'>This password reset token is invalid.</div>";
            exit();
          }
        } else {
          echo "<div id='bf-resp' style='display:grid;justify-content:center;color:#860000;'>Invalid User!!</div>";
          exit();
        }
      }
    }
  }

  private function getJSFileSrc($postId)
  {
    $formUpdateVersion = get_option('bit-form_form_update_version');
    $formScriptSrc = BITFORMS_UPLOAD_BASE_URL . "/form-scripts/$postId/bitform-js-$postId.js?bfv=$formUpdateVersion";

    return $formScriptSrc;
  }

  public function generateJs($formID = null, $entryID = null)
  {
    $isFormPreview = get_transient('bitform_form_preview');
    if ($isFormPreview && !$formID) {
      delete_transient('bitform_form_preview');
      return;
    }
    $isPageBuilder = FrontendHelpers::checkIsPageBuilder($_SERVER);
    $bfFrontendFormIds = FrontendHelpers::$bfFrontendFormIds;
    if ($isPageBuilder || empty($bfFrontendFormIds)) {
      return;
    }
    // for unique fields ids in the same form (e.g. multiple forms in the same page)
    $allFields = [];
    $formContents = [];
    $contentIds = [];
    $formIDs = [];
    $preview = false;
    $postId = '';

    $formUpdateVersion = get_option('bit-form_form_update_version');
    if ($formID) {
      $formIDs[] = $formID;
      $FrontendFormManager = new FrontendFormManager($formID, 1);
      $FormIdentifier = esc_js($FrontendFormManager->getFormIdentifier());
      $formContent = $FrontendFormManager->getFormContentWithValue($this->getValuesFromQueryParams());
      $formContent->formId = $formID;
      $formContents[] = $formContent;
      $workFlowRunType = $entryID ? 'edit' : 'create';
      $fields = $formContent->fields;
      if ($entryID) {
        $fields = $this->setFieldsValue($fields, $formID, $entryID);
      }
      $fields = $this->triggerWorkflowOnLoad($formID, 1, $fields, $workFlowRunType);
      array_push($contentIds, $FormIdentifier);
      foreach ($fields as $fk => $field) {
        $allFields[$field->typ][] = ['fk' => $fk, 'field' => $field, 'formID' => $formID, 'contentId' => $FormIdentifier];
      }
      $preview = true;
      $postId = $formID;
    } else {
      global $post;
      if (!is_object($post) && !isset($post->ID)) {
        return;
      }
      $bfFrontendFormIds = FrontendHelpers::$bfFrontendFormIds;
      $bfUniqFormIds = FrontendHelpers::getAllUniqFormIdsInPage();
      $formIDs = $bfUniqFormIds;
      $regenerateScriptFlag = $this->regenerateScriptChecker($bfUniqFormIds);

      $postId = $post->ID;
      if (!$regenerateScriptFlag) {
        $regenerateScriptFlag = $this->deleteUnusedFormPageIds($postId, $bfUniqFormIds);
      }
      $isJsGenerating = get_option('bitforms_frontend_js_generating');
      if (!$regenerateScriptFlag && !$isJsGenerating && !empty($formIDs)) {
        wp_enqueue_script('bit-form-all-script-test', $this->getJSFileSrc($postId), [], $formUpdateVersion, true);
        return;
      }

      foreach ($bfFrontendFormIds as $index => $formId) {
        $shortCodeCounter = $index + 1;
        $FrontendFormManager = new FrontendFormManager($formId, $shortCodeCounter);
        $FormIdentifier = esc_js($FrontendFormManager->getFormIdentifier());
        $formContent = $FrontendFormManager->getFormContentWithValue($this->getValuesFromQueryParams());
        $formContent->formId = $formId;
        $formContents[] = $formContent;
        $fields = $this->triggerWorkflowOnLoad($formId, $shortCodeCounter, $formContent->fields);
        $contentIds[] = $FormIdentifier;
        foreach ($fields as $fk => $field) {
          $allFields[$field->typ][] = ['fk' => $fk, 'field' => $field, 'formID' => $formId, 'contentId' => $FormIdentifier];
        }
      }
    }
    if (empty($formIDs)) {
      return;
    }
    (new FrontEndScriptGenerator())->generateJsFile($formContents, $allFields, $contentIds, $postId, $formIDs, $preview);
    wp_enqueue_script('bit-form-all-script-test', $this->getJSFileSrc($postId), [], $formUpdateVersion, true);
  }

  private function deleteUnusedFormPageIds($postId, $formIDs)
  {
    global $post;
    if (!is_object($post) && !isset($post->ID)) {
      return;
    }
    $postId = $post->ID;
    $formModel = new FormModel();
    $forms = $formModel->get(
      ['id', 'generated_script_page_ids']
    );
    $regenerateScriptFlag = false;
    foreach ($forms as $form) {
      $formId = $form->id;
      $generatedScriptPageIdsDecoded = json_decode($form->generated_script_page_ids, true);
      $generatedScriptPageIds = is_array($generatedScriptPageIdsDecoded) ? array_keys($generatedScriptPageIdsDecoded) : [];
      if (!empty($generatedScriptPageIds) && !in_array($formId, $formIDs) && in_array($postId, $generatedScriptPageIds)) {
        unset($generatedScriptPageIdsDecoded[$postId]);
        if (empty($generatedScriptPageIdsDecoded)) {
          $generatedScriptPageIdsDecoded = new \stdClass();
        }
        $regenerateScriptFlag = true;
        $formModel->update(['generated_script_page_ids' => wp_json_encode($generatedScriptPageIdsDecoded)], ['id' => $formId]);
      }
    }
    if ($regenerateScriptFlag) {
      $formUpdateVersion = get_option('bit-form_form_update_version');
      if (!$formUpdateVersion) {
        $formUpdateVersion = 1;
      } else {
        $formUpdateVersion = (int) $formUpdateVersion + 1;
      }
      update_option('bit-form_form_update_version', $formUpdateVersion);
    }
    return $regenerateScriptFlag;
  }

  private function regenerateScriptChecker($formsIds)
  {
    global $post;
    if (!is_a($post, 'WP_Post') && !isset($post->ID)) {
      return;
    }
    $postId = $post->ID;
    $regenerateScriptFlag = false;
    $formModel = new FormModel();
    foreach ($formsIds as $formId) {
      $formInstance = new FormManager($formId);
      $generatedPages = $formInstance->getFormData('generated_script_page_ids');
      if (empty($generatedPages)) {
        $regenerateScriptFlag = true;
      } elseif (is_object($generatedPages) && (!isset($generatedPages->{$postId}) || (isset($generatedPages->{$postId}) && false === $generatedPages->{$postId}))) {
        $regenerateScriptFlag = true;
      }
      if (!$regenerateScriptFlag) {
        continue;
      }
      if (!is_object($generatedPages)) {
        $generatedPages = (object) [];
      }
      $generatedPages->{$postId} = true;
      $formModel->update(
        [
          'generated_script_page_ids' => \wp_json_encode($generatedPages)
        ],
        [
          'id' => $formId,
        ]
      );
    }
    return $regenerateScriptFlag;
  }

  private function addInlineScript($code, $handle = '', $position = 'after')
  {
    $scriptHandle = !empty($handle) ? $handle : 'bf-inline-script';
    if (!wp_script_is($scriptHandle)) {
      wp_register_script($scriptHandle, '', [], '', true);
      wp_enqueue_script($scriptHandle);
    }
    wp_add_inline_script($scriptHandle, $code, $position);
  }

  private function addInlineStyle($code, $handle = '')
  {
    $styleHandle = !empty($handle) ? $handle : 'bf-inline-style';
    if (!wp_style_is($styleHandle)) {
      wp_register_style($styleHandle, '', [], '', true);
      wp_enqueue_style($styleHandle);
    }
    wp_add_inline_style($styleHandle, $code);
  }

  private function triggerWorkflowOnLoad($formID, $shortCodeCounter, $fields, $workFlowRunType = 'create')
  {
    $FrontendFormManager = new FrontendFormManager($formID, $shortCodeCounter);
    $previousValue = $this->getValuesFromQueryParams();
    $formContent = $FrontendFormManager->getFormContentWithValue($previousValue);
    if (!empty($formContent->workFlowExist)) {
      $workFlowRunHelper = new WorkFlow($formID);
      if (!empty($formContent->workFlowExist->onload)) {
        $workFlowreturnedOnLoad = $workFlowRunHelper->executeOnLoad(
          $workFlowRunType,
          $fields
        );

        if (!empty($workFlowreturnedOnLoad['fields'])) {
          return $workFlowreturnedOnLoad['fields'];
        }
      }
    }

    return $fields;
  }

  private function executeOnUserInput($formID, $shortCodeCounter, $fields)
  {
    $FrontendFormManager = new FrontendFormManager($formID, $shortCodeCounter);
    $previousValue = $this->getValuesFromQueryParams();
    $formContent = $FrontendFormManager->getFormContentWithValue($previousValue);
    $customCodesExist = strpos(FrontEndScriptGenerator::getCustomCodes($formID)['JavaScript'], 'bfVars');
    if ($customCodesExist || (!empty($formContent->workFlowExist) && !empty($formContent->workFlowExist->oninput))) {
      $workFlowRunHelper = new WorkFlow($formID);
      return $workFlowRunHelper->executeOnUserInput('create', $fields);
    }
  }

  private function getValuesFromQueryParams()
  {
    $reqField = $_SERVER['QUERY_STRING'];
    $queryParamsValue = [];
    if (!empty($reqField)) {
      foreach (explode('&', $reqField) as $keyValue) {
        // $pattern = '/([a-zA-Z0-9])([a-zA-Z])\=+/';
        $pattern = '/([^.]+)=(.*?)([^.]+)/';
        $matches = preg_match($pattern, $keyValue, $matchFormat);
        if ($matches) {
          list($field, $value) = explode('=', $keyValue, 2);

          if (!trim($value)) {
            continue;
          }

          $queryParamsValue[$field][] = sanitize_text_field(urldecode($value));
        }
      }
    }

    return $queryParamsValue;
  }

  public function handleFrontendRenderRequest($atts)
  {
    $formPreview = isset($atts['form_preview']) ? $atts['form_preview'] : false;
    if (isset($atts['form_id'])) {
      $formID = intval($atts['form_id']);
    }
    if (isset($atts['entry_id'])) {
      $entryId = intval($atts['entry_id']);
    } else {
      $entryId = false;
    }
    if (isset($atts['id'])) {
      $atts = shortcode_atts(['id' => 0], $atts);
      $formID = intval($atts['id']);
    }

    if (!$formID) {
      return __('Form ID cannot be empty', 'bit-form');
    }

    if (!$this->isExist($formID)) {
      return sprintf(__('#%s no. Form doesn\'t exists', 'bit-form'), $formID);
    }

    // check for abandoned form entry id
    $isAbandoned = false;
    if (empty($entryId) && Utilities::isPro() && class_exists('\BitCode\BitFormPro\Admin\FormSettings\FormAbandonment')) {
      $FormAbandonment = new FormAbandonment($formID);
      $isAbandoned = $FormAbandonment->checkAbandonedFormEntryId();
    }

    FrontendHelpers::setBfFrontendFormIds($formID);
    $bfFrontendFormIds = FrontendHelpers::$bfFrontendFormIds;
    $shortCodeCounter = count($bfFrontendFormIds);
    $FrontendFormManager = new FrontendFormManager($formID, $shortCodeCounter);

    if (!$FrontendFormManager->checkStatus()) {
      return  sprintf(__('#%s no. Form is not active', 'bit-form'), $formID);
    }
    ob_start();
    $this->loadAssets($formID);

    $font = $FrontendFormManager->getFont();

    if ($font && !$formPreview) {
      wp_enqueue_style('bf-google-font', $font, '1.0.0', true);
    }

    if (!empty($_GET['token']) && !empty($_GET['id'])) {
      $this->validPassowordResetToken($_GET['token'], $_GET['id'], $formID);
    }

    $previousValue = $this->getValuesFromQueryParams();
    $errorMessages = []; // delete
    $FormIdentifier = esc_js($FrontendFormManager->getFormIdentifier());
    $nonce = $FrontendFormManager->getFormToken();
    $file = count($FrontendFormManager->getUploadFields()) > 0 ? $FrontendFormManager->getUploadFields() : false;

    $FrontendFormManager->setViewCount();

    $formContent = $FrontendFormManager->getFormContentWithValue($previousValue);
    $fields = $formContent->fields;
    $layout = $formContent->layout;
    $buttons = !empty($formContent->buttons) ? $formContent->buttons : '';
    $additional = $formContent->additional;

    $workFlowRunType = $entryId ? 'edit' : 'create';
    if ($entryId) {
      $fields = $this->setFieldsValue($fields, $formID, $entryId);
    }

    $fields = $this->triggerWorkflowOnLoad($formID, $shortCodeCounter, $fields, $workFlowRunType);
    $workFlowreturnedOnUserInput = $this->executeOnUserInput($formID, $shortCodeCounter, $fields);

    // test for form before remove
    $noLabel = ['decision-box', 'html', 'button', 'paypal', 'razorpay', 'recaptcha'];
    foreach ($fields as $fldKey => $field) {
      if (!in_array($field->typ, $noLabel) && isset($field->lbl)) {
        $lblReplaceToBackslash = str_replace('$_bf_$', '\\', $field->lbl);
        $fields->{$fldKey}->lbl = FieldValueHandler::replaceSmartTagWithValue($lblReplaceToBackslash);
      }
    }
    $fieldsKey = $FrontendFormManager->getFieldsKey();

    $captchaV3Settings = $FrontendFormManager->getCaptchaV3Settings();
    if ($FrontendFormManager->getCaptchaSettings() || $captchaV3Settings) {
      $integrationHandler = new IntegrationHandler(0);
      $allFormIntegrations = $integrationHandler->getAllIntegration('app');
      if (!is_wp_error($allFormIntegrations)) {
        foreach ($allFormIntegrations as $integration) {
          if (
            $FrontendFormManager->getCaptchaSettings()
            && !is_null($integration->integration_type)
            && 'gReCaptcha' === $integration->integration_type
          ) {
            $integrationDetails = json_decode($integration->integration_details);
            $integrationDetails->id = $integration->id;
            $reCAPTCHA = $integrationDetails;
            $reCAPTCHAVersion = 'v2';
          }

          if ($captchaV3Settings) {
            if (!is_null($integration->integration_type) && 'gReCaptchaV3' === $integration->integration_type) {
              $integrationDetails = json_decode($integration->integration_details);
              $integrationDetails->id = $integration->id;
              $reCAPTCHA = $integrationDetails;
              $reCAPTCHAVersion = 'v3';
            }
          }
        }
      }
    }

    if ($captchaV3Settings && !empty($reCAPTCHA->siteKey)) {
      // DANGER: no matter what, DONT CHANGE THE SCRIPT ID OF THIS SCRIPT
      $scriptId = BITFORMS_PREFIX . 'recaptcha';
      wp_enqueue_script($scriptId, "https://www.google.com/recaptcha/api.js?render={$reCAPTCHA->siteKey}");
    }

    $configs = [
      'bf_separator' => BITFORMS_BF_SEPARATOR,
    ];

    // check if fields has paypal or razorpay
    $paymentFields = ['paypal', 'razorpay', 'stripe'];
    $paymentFieldData = [];
    foreach ($fields as $key => $field) {
      if (in_array($field->typ, $paymentFields)) {
        $paymentFieldData[$key] = $field;
      }
    }

    if (!empty($paymentFieldData)) {
      $integrationHandler = new IntegrationHandler(0);
      foreach ($paymentFieldData as $fldKey => $fldData) {
        if ('paypal' === $fldData->typ) {
          $paypalIntegration = $integrationHandler->getAIntegration($fldData->payIntegID);
          $integrationDetails = json_decode($paypalIntegration[0]->integration_details);
          $clientID = $integrationDetails->clientID;
          $fields->{$fldKey}->clientId = $clientID;
        } elseif ('razorpay' === $fldData->typ) {
          $razorpayIntegration = $integrationHandler->getAIntegration($fldData->payIntegID);
          $integrationDetails = json_decode($razorpayIntegration[0]->integration_details);
          $clientID = $integrationDetails->apiKey;
          $fields->{$fldKey}->clientId = $clientID;
        } elseif ('stripe' === $fldData->typ) {
          $stripeIntegration = $integrationHandler->getAIntegration($fldData->payIntegID);
          $integrationDetails = json_decode($stripeIntegration[0]->integration_details);
          $publishableKey = $integrationDetails->publishableKey;
          $fields->{$fldKey}->publishableKey = $publishableKey;
        }
      }
    }

    $bitFormFrontArr = [
      'ajaxURL'                        => admin_url('admin-ajax.php'),
      'nonce'                          => $nonce,
      'version'                        => BITFORMS_VERSION,
      'layout'                         => $layout,
      'fields'                         => $fields,
      'buttons'                        => $buttons,
      'fieldsKey'                      => $fieldsKey,
      'file'                           => $file,
      'configs'                        => $configs,
      'formId'                         => $formID,
      'appID'                          => "bitforms_{$formID}",
      'GCLID'                          => $FrontendFormManager->isGCLIDEnabled(),
      'assetUrl'                       => BITFORMS_ASSET_URI,
      'onfieldCondition'               => !empty($workFlowreturnedOnUserInput['onfield_input_conditions']) ? $workFlowreturnedOnUserInput['onfield_input_conditions'] : false,
      'smartTags'                      => !empty($workFlowreturnedOnUserInput['smart_tags']) ? $workFlowreturnedOnUserInput['smart_tags'] : [],
      'paymentCallbackUrl'             => get_rest_url() . 'bitform/v1/payments/razorpay',
      'gRecaptchaSiteKey'              => !empty($reCAPTCHA->siteKey) ? $reCAPTCHA->siteKey : null,
      'gRecaptchaVersion'              => !empty($reCAPTCHAVersion) ? $reCAPTCHAVersion : null,
    ];

    if ($entryId) {
      $bitFormFrontArr['entryId'] = $entryId;
    }

    if (isset($additional->enabled->validateFocusLost)) {
      $bitFormFrontArr['validateFocusLost'] = true;
    }

    if (!empty($isAbandoned)) {
      $bitFormFrontArr['oldValues'] = $this->getFieldsValue($formID, $isAbandoned);
      if (empty($entryId)) {
        $bitFormFrontArr['entryId'] = $isAbandoned;
      }
    }

    $bitFormsFront = apply_filters(
      'bitforms_localized_script',
      $bitFormFrontArr
    );

    $layout = \json_encode($layout);
    $buttons = \json_encode($buttons);
    $frontArr = json_encode($bitFormFrontArr);

    $bfGlobals = <<<BFGLOBALS
      if(!window.bf_globals) { 
        window.bf_globals = {} 
      } if(!window.bf_globals.{$FormIdentifier}) { 
        window.bf_globals.{$FormIdentifier} = {} 
      }
      if(document.getElementById('{$FormIdentifier}')) {
        window.bf_globals.{$FormIdentifier} = {...window.bf_globals.{$FormIdentifier}, ...{$frontArr}};
      }
BFGLOBALS;
    $this->addInlineScript($bfGlobals, 'bit-form-all-script', 'before');

    $html = $FrontendFormManager->formView($fields, $file, $errorMessages);

    // if form preview then return html otherwise echo with output buffer
    if ($formPreview) {
      ob_clean();
      $formViewObject = new \stdClass();
      $formViewObject->html = $html;
      $formViewObject->font = $font;
      $formViewObject->bfGlobals = $bfGlobals;
      return $formViewObject;
    }
    echo trim($html);
    return ob_get_clean();
  }

  private function isExist($formID)
  {
    $formModel = new FormModel();
    $form = $formModel->get(
      [
        'id'
      ],
      [
        'id' => $formID,
      ]
    );
    if (!is_wp_error($form)) {
      return true;
    }
    return false;
  }

  private function getFieldsValue($formID, $entryID)
  {
    $formEntryModel = new FormEntryMetaModel();
    $metaValues = $formEntryModel->get(
      [
        'meta_key',
        'meta_value'
      ],
      [
        'bitforms_form_entry_id' => $entryID,
      ]
    );
    $fldsData = (object) [];
    if (!is_wp_error($metaValues)) {
      foreach ($metaValues as $metaValue) {
        $metaKey = $metaValue->meta_key;
        $metaVal = $metaValue->meta_value;
        // if meta value is array then convert to string
        if (preg_match('/^\[.*\]$/', $metaVal)) {
          $metaVal = json_decode($metaVal);
          //check is it array of objects
          if (is_array($metaVal) && is_object($metaVal[0])) {
            $metaVal = $metaValue->meta_value;
          } else {
            $metaVal = implode(BITFORMS_BF_SEPARATOR, $metaVal);
          }
        }
        if (!isset($fldsData->{$metaKey})) {
          $fldsData->{$metaKey} = '';
        }
        $fldsData->{$metaKey} = $metaVal;
      }
    }

    return $fldsData;
  }

  public function setFieldsValue($fields, $formID, $entryID)
  {
    $formEntryModel = new FormEntryMetaModel();
    $metaValues = $formEntryModel->get(
      [
        'meta_key',
        'meta_value'
      ],
      [
        'bitforms_form_entry_id' => $entryID,
      ]
    );
    if (!is_wp_error($metaValues)) {
      foreach ($metaValues as $metaValue) {
        $metaKey = $metaValue->meta_key;
        $metaVal = $metaValue->meta_value;
        // if meta value is array then convert to string
        if (preg_match('/^\[.*\]$/', $metaVal)) {
          $metaVal = json_decode($metaVal);
          //check is it array of objects
          if (is_array($metaVal) && is_object($metaVal[0])) {
            $metaVal = $metaValue->meta_value;
          } else {
            $metaVal = implode(BITFORMS_BF_SEPARATOR, $metaVal);
          }
        }
        if (property_exists($fields, $metaKey)) {
          $fields->{$metaKey}->val = $metaVal;
          if ('file-up' === $fields->{$metaKey}->typ || 'advanced-file-up' === $fields->{$metaKey}->typ) {
            $fields->{$metaKey}->val = $metaValue->meta_value;
            $fields->{$metaKey}->config->oldFiles = $metaValue->meta_value;
            $urlQuery = parse_url(FileDownloadProvider::getBaseDownloadURL(), PHP_URL_QUERY);
            $baseDLURL = FileDownloadProvider::getBaseDownloadURL();
            $baseDLURL = empty($urlQuery) ? $baseDLURL . '?' : $baseDLURL . '&';
            $fields->{$metaKey}->config->baseDLURL = $baseDLURL . "formID={$formID}&entryID={$entryID}";
          }
        }
      }
    }

    return $fields;
  }

  public function loadAssets($formID = 0)
  {
    $bfUniqFormIds = FrontendHelpers::getAllFormIdsInPage();
    $isPageBuilder = FrontendHelpers::$isPageBuilder;
    $bfMultipleFormsExists = $isPageBuilder ? true : count($bfUniqFormIds) > 1;

    if (!empty($formID)) {
      $formIds = [$formID];
    } else {
      $formIds = $bfUniqFormIds;
    }
    foreach ($formIds as $formID) {
      global $bitform_dequeued_styles;
      if (is_array($bitform_dequeued_styles) && in_array($formID, $bitform_dequeued_styles)) {
        continue;
      }
      if ($bfMultipleFormsExists) {
        $newFormId = $formID . '-formid';
      } else {
        $newFormId = $formID;
      }
      $formUpdateVersion = get_option('bit-form_form_update_version');
      if (!wp_style_is('bitform-style-' . $newFormId) && is_readable(BITFORMS_CONTENT_DIR . '/form-styles/bitform-' . $newFormId . '.css')) {
        wp_enqueue_style(
          'bitform-style-' . $newFormId,
          BITFORMS_UPLOAD_BASE_URL . "/form-styles/bitform-{$newFormId}.css",
          [],
          $formUpdateVersion
        );
        if ($isPageBuilder) {
          $formStyle = file_get_contents(BITFORMS_CONTENT_DIR . '/form-styles/bitform-' . $newFormId . '.css');
          echo sprintf("<style id='bitform-style-{$newFormId}'>%s</style>", $formStyle);
        }
      }
      if (!wp_style_is('bitform-style-custom-' . $formID) && is_readable(BITFORMS_CONTENT_DIR . '/form-styles/bitform-custom-' . $formID . '.css')) {
        wp_enqueue_style(
          'bitform-style-custom-' . $formID,
          BITFORMS_UPLOAD_BASE_URL . "/form-styles/bitform-custom-{$formID}.css",
          [],
          $formUpdateVersion
        );
        if ($isPageBuilder) {
          $formStyle = file_get_contents(BITFORMS_CONTENT_DIR . '/form-styles/bitform-custom-' . $formID . '.css');
          echo sprintf("<style id='bitform-style-custom-{$formID}'>%s</style>", $formStyle);
        }
      }
    }
  }
}
