<?php

namespace BitCode\BitForm\Frontend\Form\View\Theme\Fields;

use BitCode\BitForm\Frontend\Form\View\Theme\Fields\FieldHelpers;

class ButtonField
{
  public static function init($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error = null, $value = null)
  {
    $inputWrapper = new InputWrapper($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error, $value);
    $button = self::field($field, $rowID, $form_atomic_Cls_map, $formID);
    return $inputWrapper->wrapper($button, true, true);
  }

  private static function field($field, $rowID, $form_atomic_Cls_map, $formID, $error = null, $value = null)
  {
    $fieldHelpers = new FieldHelpers($field, $rowID, $form_atomic_Cls_map);
    // $helperTxt = self::helperTxt($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error = null, $value = null);

    $btnPreIcn = $fieldHelpers->icon('btnPreIcn', 'btn-pre-i');
    $btnSufIcn = $fieldHelpers->icon('btnSufIcn', 'btn-suf-i');
    $disabled = $fieldHelpers->disabled();
    // $name = $field->btnTyp === 'submit' ? 'name="bit-form-submit-btn"' : '';
    $name = $fieldHelpers->name();
    $spanner = '<span class="' . $fieldHelpers->getAtomicCls('spanner') . ' d-none"></span>';
    $submitSpanner = 'submit' === $field->btnTyp ? $spanner : '';
    $btnTyp = 'save-draft' === $field->btnTyp ? 'button' : $field->btnTyp;
    $saveDraftCls = 'save-draft' === $field->btnTyp ? 'bf-trigger-form-abandonment' : '';

    return <<<BUTTONFIELD
      <div 
        {$fieldHelpers->getCustomAttributes('inp-fld-wrp')}
        class="{$fieldHelpers->getAtomicCls('inp-fld-wrp')} {$fieldHelpers->getCustomClasses('inp-fld-wrp')}"
      >
        <button
          {$fieldHelpers->getCustomAttributes('btn')}
          class="{$fieldHelpers->getAtomicCls('btn')} {$fieldHelpers->getCustomClasses('btn')} {$saveDraftCls}"
          type="{$btnTyp}"
          {$name}
          {$disabled}
        >
          {$btnPreIcn}
          {$fieldHelpers->kses_post($fieldHelpers->renderHTMR($field->txt))}
          {$btnSufIcn}
          {$submitSpanner}
        </button>
      </div>
BUTTONFIELD;
  }

  private static function helperTxt($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error = null, $value = null)
  {
    $fieldHelpers = new FieldHelpers($field, $rowID, $form_atomic_Cls_map);
    $hlpPreIcn = $fieldHelpers->icon('hlpPreIcn', 'hlp-txt-pre-i');
    $hlpSufIcn = $fieldHelpers->icon('hlpSufIcn', 'hlp-txt-suf-i');
    $hlpTxt = isset($field->helperTxt) ? $fieldHelpers->renderHTMR($field->helperTxt) : '';

    $helperTxt = <<<HELPERTXT
      <div
        {$fieldHelpers->getCustomAttributes('hlp-txt')}
        class="{$fieldHelpers->getAtomicCls('hlp-txt')} {$fieldHelpers->getCustomClasses('hlp-txt')}"
      >
        {$hlpPreIcn}
        {$fieldHelpers->kses_post($hlpTxt)}
        {$hlpSufIcn}
      </div>

HELPERTXT;

    return  property_exists($field, 'helperTxt') ? $helperTxt : '';
  }
}
