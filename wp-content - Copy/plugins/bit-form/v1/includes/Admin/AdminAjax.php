<?php

namespace BitCode\BitForm\Admin;

use BitCode\BitForm\Admin\Form\Template\TemplateProvider;
use BitCode\BitForm\Core\Database\FormEntryModel;
use BitCode\BitForm\Core\Form\FormHandler;
use BitCode\BitForm\Core\Integration\IntegrationHandler;
use BitCode\BitForm\Core\Integration\Integrations;

class AdminAjax {
  public function register() {
    add_action('wp_ajax_bitforms_integrations', [$this, 'integrations']);
    add_action('wp_ajax_integration', [$this, 'integration']);
    add_action('wp_ajax_bitforms_update_form', [$this, 'updateForm']);
    add_action('wp_ajax_bitforms_templates', [$this, 'templates']);
    add_action('wp_ajax_bitforms_create_new_form', [$this, 'createNewForm']);
    add_action('wp_ajax_bitforms_get_template', [$this, 'getTemplate']);
    add_action('wp_ajax_bitforms_change_status', [$this, 'changeFormStatus']);
    add_action('wp_ajax_bitforms_bulk_status_change', [$this, 'changeBulkFormStatus']);
    add_action('wp_ajax_bitforms_get_a_form', [$this, 'getAForm']);
    add_action('wp_ajax_bitforms_bulk_delete_form', [$this, 'deleteBlukForm']);
    add_action('wp_ajax_bitforms_bulk_delete_form_entries', [$this, 'deleteBlukFormEntries']);
    add_action('wp_ajax_bitforms_delete_aform', [$this, 'deleteAForm']);
    add_action('wp_ajax_bitforms_duplicate_aform', [$this, 'duplicateAForm']);
    add_action('wp_ajax_bitforms_export_aform', [$this, 'exportAForm']);
    add_action('wp_ajax_bitforms_import_aform', [$this, 'importAForm']);
    add_action('wp_ajax_bitforms_get_form_entries', [$this, 'getFormEntry']);
    add_action('wp_ajax_bitforms_duplicate_form_entries', [$this, 'duplicateFormEntry']);
    add_action('wp_ajax_bitforms_edit_form_entry', [$this, 'editFormEntry']);
    add_action('wp_ajax_bitforms_update_form_entry', [$this, 'updateFormEntry']);
    add_action('wp_ajax_bitforms_get_all_form', [$this, 'getAllForms']);
    add_action('wp_ajax_bitforms_get_all_wp_pages', [$this, 'getAllWPPages']);
    add_action('wp_ajax_bitforms_delete_success_messsage', [$this, 'deleteSuccessMessage']);
    add_action('wp_ajax_bitforms_delete_integration', [$this, 'deleteAIntegration']);
    add_action('wp_ajax_bitforms_delete_workflow', [$this, 'deleteAWorkflow']);
    add_action('wp_ajax_bitforms_delete_mailtemplate', [$this, 'deleteAMailTemplate']);
    add_action('wp_ajax_bitforms_duplicate_mailtemplate', [$this, 'duplicateAMailTemplate']);
    add_action('wp_ajax_bitforms_save_allForm_report_prefs', [$this, 'setAllFormsReport']);
    add_action('wp_ajax_bitforms_save_grecaptcha', [$this, 'savegReCaptcha']);
    add_action('wp_ajax_bitforms_form_log_history', [$this, 'getLogHistory']);
    add_action('wp_ajax_bitforms_import_file_data', [$this, 'importFileData']);
    add_action('wp_ajax_bitforms_filter_export_data', [$this, 'filterExportEntry']);
    add_action('wp_ajax_bitforms_entry_status_update', [$this, 'updateEntryStatus']);
    add_action('wp_ajax_bitforms_get_form_entry_count', [$this, 'getFormEntryLabelAndCount']);
    add_action('wp_ajax_bitforms_save_payment_setting', [$this, 'savePaymentSettings']);

    // migrate to v2
    add_action('wp_ajax_bitforms_start_migration_to_v2', [$this, 'smartMigrationToV2']);
  }

  public function smartMigrationToV2() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $formHandler = FormHandler::getInstance();
      $formHandler->admin->startMigrationProcess();
      wp_send_json_success(
        __('Migrated to v2', 'bit-form'),
        200
      );
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  /**
   * Undocumented function
   *
   * @return void
   */
  public function integrations() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $testIntegration = new Integrations();
      $allIntegrations = $testIntegration->getAllintegrations();
      if ($allIntegrations) {
        wp_send_json_success($allIntegrations, 200);
      } else {
        wp_send_json_error(
          __('No Integration Found', 'bit-form'),
          404
        );
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function templates() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $templateProvider = new TemplateProvider();
      $status = $templateProvider->getAllTemplates();
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function getTemplate() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->getTemplate($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function getAllForms() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $formHandler = FormHandler::getInstance();
      $all_forms = $formHandler->admin->getAllForm();
      if (is_wp_error($all_forms)) {
        wp_send_json_error($all_forms->get_error_message(), 411);
      } else {
        wp_send_json_success($all_forms, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function importDataStore() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      echo json_encode($input);
      die;
    // $formHandler =  FormHandler::getInstance();
    // $status = $formHandler->admin->getFormEntryLabelAndCount($_REQUEST, $input);
    // if (is_wp_error($status)) {
            //     wp_send_json_error($status->get_error_message(), 411);
    // } else {
            //     wp_send_json_success($status, 200);
    // }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function savePaymentSettings() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->savePaymentSetting($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function getFormEntryLabelAndCount() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->getFormEntryLabelAndCount($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function getFormEntry() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->getFormEntry($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(__('Token expired', 'bit-form'), 401);
    }
  }

  public function filterExportEntry() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->getExportEntry($input->data);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(__('Token expired', 'bit-form'), 401);
    }
  }

  /**
   * Undocumented function
   *
   * @return void
   */
  public function updateForm() {
    \ignore_user_abort();
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->updateForm($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function createNewForm() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->createNewForm($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function updateEntryStatus() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formId = sanitize_text_field($input->formId);
      $entryId = sanitize_text_field($input->entryId);
      $formEntryModel = new FormEntryModel();
      $updatedTime = current_time('mysql');
      $status = $formEntryModel->update(
        [
          'status'     => 0,
          'updated_at' => $updatedTime,
        ],
        [
          'form_id' => $formId,
          'id'      => $entryId,
        ]
      );
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success(['update_at_time' => $updatedTime], 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function changeFormStatus() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->changeFormStatus($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function changeBulkFormStatus() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->changeBulkFormStatus($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function getAForm() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->getAForm($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function duplicateAForm() {
    \ignore_user_abort();
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->duplicateAForm($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function importAForm() {
    \ignore_user_abort();
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->importAForm($input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function exportAForm() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->exportAForm($_REQUEST);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function deleteAForm() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->deleteAForm($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function deleteBlukForm() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->deleteBlukForm($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function deleteBlukFormEntries() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->deleteBlukFormEntries($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function duplicateFormEntry() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->duplicateFormEntry($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function editFormEntry() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->editFormEntry($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function getLogHistory() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->getLogHistory($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function updateFormEntry() {
    \ignore_user_abort();
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->updateFormEntry($_REQUEST, $_POST);

      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        $status = IntegrationHandler::maybeSetCronForIntegration($status, 'update');
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function getAllWPPages() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->getAllWPPages($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function deleteSuccessMessage() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->deleteSuccessMessage($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function deleteAIntegration() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->deleteAIntegration($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function deleteAWorkflow() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->deleteAWorkflow($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function deleteAMailTemplate() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->deleteAMailTemplate($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function duplicateAMailTemplate() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->duplicateAMailTemplate($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function setAllFormsReport() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->setAllFormsReport($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }

  public function savegReCaptcha() {
    if (wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON);
      $formHandler = FormHandler::getInstance();
      $status = $formHandler->admin->savegReCaptcha($_REQUEST, $input);
      if (is_wp_error($status)) {
        wp_send_json_error($status->get_error_message(), 411);
      } else {
        wp_send_json_success($status, 200);
      }
    } else {
      wp_send_json_error(
        __(
          'Token expired',
          'bit-form'
        ),
        401
      );
    }
  }
}
