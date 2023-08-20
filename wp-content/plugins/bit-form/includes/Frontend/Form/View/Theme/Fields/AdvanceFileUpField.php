<?php

namespace BitCode\BitForm\Frontend\Form\View\Theme\Fields;

use BitCode\BitForm\Frontend\Form\View\Theme\Fields\FieldHelpers;

class AdvanceFileUpField
{
  public static function init($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error = null, $value = null)
  {
    $inputWrapper = new InputWrapper($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error, $value);
    $input = self::field($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error, $value);
    return $inputWrapper->wrapper($input);
  }

  private static function field($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error = null, $value = null)
  {
    $fh = new FieldHelpers($field, $rowID, $form_atomic_Cls_map);
    $name = $fh->name();
    $readonlyCls = isset($field->readonly) ? 'readonly' : '';
    $disabledCls = isset($field->disabled) ? 'disabled' : '';

    return <<<ADVANCEFILEUPFIELD
      <input
        hidden
        id={$rowID}
        type="file"
        class="filepond"
        {$name}
        {$fh->readonly()}
        {$fh->disabled()}
      />
    <div id="filepond-{$rowID}-container" class="{$fh->getAtomicCls("filepond-{$rowID}-container")} {$readonlyCls} {$disabledCls}"></div>
ADVANCEFILEUPFIELD;
  }
}
