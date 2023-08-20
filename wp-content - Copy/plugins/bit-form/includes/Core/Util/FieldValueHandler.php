<?php

namespace BitCode\BitForm\Core\Util;

final class FieldValueHandler
{
  public static function replaceFieldWithValue($stringToReplaceField, $fieldValues)
  {
    if (empty($stringToReplaceField)) {
      return $stringToReplaceField;
    }
    if (!is_string($stringToReplaceField)) {
      $stringToReplaceField = wp_json_encode($stringToReplaceField);
    }
    $stringToReplaceField = static::replaceSmartTagWithValue($stringToReplaceField);
    $fieldPattern = '/\${\w[^ ${}]*}/';

    preg_match_all($fieldPattern, $stringToReplaceField, $matchedField);
    if (empty($matchedField)) {
      return $stringToReplaceField;
    }
    $uniqueFieldsInStr = array_unique($matchedField[0]);
    foreach ($uniqueFieldsInStr as $key => $value) {
      $fieldName = substr($value, 2, strlen($value) - 3);
      $fieldValue = null;
      if (isset($fieldValues[$fieldName])) {
        $targetFieldValue = isset($fieldValues[$fieldName]['value']) ? $fieldValues[$fieldName]['value'] : $fieldValues[$fieldName];
        if ('array' === gettype($targetFieldValue) || 'object' === gettype($targetFieldValue)) {
          foreach ((array)$targetFieldValue as $singleTargetVal) {
            if (isset($fieldValue)) {
              if (is_numeric($fieldValue) && is_numeric($singleTargetVal)) {
                $fieldValue = $fieldValue + $singleTargetVal;
              } else {
                $fieldValue = "$fieldValue,  $singleTargetVal";
              }
            } else {
              $fieldValue = $singleTargetVal;
            }
          }
        // $fieldValue = wp_json_encode($targetFieldValue);
        } else {
          $fieldValue = strval($targetFieldValue);
        }
        $stringToReplaceField = str_replace($value, $fieldValue, $stringToReplaceField);
      } else {
        $stringToReplaceField = str_replace($value, '', $stringToReplaceField);
      }
    }

    return $stringToReplaceField;
  }

  public static function validateMailArry($emailAddresses, $fieldValues)
  {
    if (!is_array($emailAddresses)) {
      return [FieldValueHandler::replaceFieldWithValue($emailAddresses, $fieldValues)];
    }
    foreach ($emailAddresses as $key => $email) {
      if (!is_email($email)) {
        $email = FieldValueHandler::replaceFieldWithValue($email, $fieldValues);
        if (is_email($email)) {
          $emailAddresses[$key] = $email;
        }
      }
    }
    return $emailAddresses;
  }

  public static function replaceSmartTagWithValue($fieldValues)
  {
    $fieldPattern = '/(\${_[^{]*?)(?=\})}/';
    $matchPattern = preg_match_all($fieldPattern, $fieldValues, $matchedField);
    if (!$matchPattern) {
      return $fieldValues;
    }

    $ajaxRequest = false;
    if (isset($_REQUEST['action']) && 'bitforms_trigger_workflow' === $_REQUEST['action']) {
      $ajaxRequest = true;
    }

    foreach (array_unique($matchedField[0]) as $value) {
      $fieldName = trim(substr($value, 2, strlen($value) - 3));

      $matches = preg_match('/\("*([^\)]+"*)\)/', $value, $matchCustomFormat);

      $customValue = '';
      if ($matches) {
        $removeQuote = ["'", '"'];
        $customValue = str_replace($removeQuote, '', $matchCustomFormat[1]);
        $fieldName = str_replace($matchCustomFormat[0], '', $fieldName);
      }

      $tagFieldValues = SmartTags::getSmartTagValue($fieldName, $ajaxRequest, $customValue);
      $fieldValues = str_replace($value, $tagFieldValues, $fieldValues);
    }
    return $fieldValues;
  }

  public static function isEmpty($val)
  {
    if (empty($val) && !in_array($val, ['0', 0, 0.0], true)) {
      return true;
    }
    return false;
  }

  public static function formatFieldValueForMail($fields, $fieldValues)
  {
    $formattedFldValues = $fieldValues;
    $file_upload_types = ['file-up', 'advanced-file-up'];

    foreach ($fields as $fldKey => $fldData) {
      if (in_array($fldData->typ, $file_upload_types)) {
        continue;
      }
      if (array_key_exists($fldKey, $fieldValues)) {
        if (is_array($fieldValues[$fldKey])) {
          $formattedFldValues[$fldKey] = htmlspecialchars(implode(', ', $fieldValues[$fldKey]));
        } else {
          $formattedFldValues[$fldKey] = htmlspecialchars($fieldValues[$fldKey]);
        }
        if ('textarea' === $fldData->typ) {
          $formattedFldValues[$fldKey] = nl2br(htmlspecialchars($fieldValues[$fldKey]));
        }
        if ('date' === $fldData->typ) {
          $formattedFldValues[$fldKey] = date_i18n(get_option('date_format'), strtotime(htmlspecialchars($fieldValues[$fldKey])));
        }
      }
    }

    return $formattedFldValues;
  }
}
