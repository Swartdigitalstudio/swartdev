<?php

namespace BitCode\BitForm\Core\Util;

use BitCode\BitForm\Core\Form\FormManager;

final class FileHandler {
  public function rmrf($dir) {
    if (is_dir($dir)) {
      $objects = scandir($dir);
      foreach ($objects as $object) {
        if ('.' !== $object && '..' !== $object) {
          if (is_dir($dir . DIRECTORY_SEPARATOR . $object) && !is_link($dir . DIRECTORY_SEPARATOR . $object)) {
            $this->rmrf($dir . DIRECTORY_SEPARATOR . $object);
          } else {
            unlink($dir . DIRECTORY_SEPARATOR . $object);
          }
        }
      }
      rmdir($dir);
    } else {
      unlink($dir);
    }
  }

  public function cpyr($source, $destination) {
    if (is_dir($source)) {
      mkdir($destination);
      // chmod($destination, 0744);
      $objects = scandir($source);
      foreach ($objects as $object) {
        if ('.' !== $object && '..' !== $object) {
          if (is_dir($source . DIRECTORY_SEPARATOR . $object) && !is_link($source . DIRECTORY_SEPARATOR . $object)) {
            cpyr($source . DIRECTORY_SEPARATOR . $object, $destination . DIRECTORY_SEPARATOR . $object);
          } elseif (is_file($source . DIRECTORY_SEPARATOR . $object)) {
            copy($source . DIRECTORY_SEPARATOR . $object, $destination . DIRECTORY_SEPARATOR . $object);
          // chmod($destination. DIRECTORY_SEPARATOR .$object, 0644);
          } else {
            symlink($source . DIRECTORY_SEPARATOR . $object, $destination . DIRECTORY_SEPARATOR . $object);
          }
        }
      }
    } else {
      copy($source, $destination);
    }
  }

  private function getByteSizeByUnit($sizeString) {
    // split 2MB into 2 and MB
    $size = preg_replace('/[^0-9\.]/', '', $sizeString);
    $unit = preg_replace('/[^a-zA-Z]/', '', $sizeString);
    $unit = strtolower($unit);
    if ('kb' === $unit) {
      return $size * 1024;
    } elseif ('mb' === $unit) {
      return $size * 1024 * 1024;
    } elseif ('gb' === $unit) {
      return $size * 1024 * 1024 * 1024;
    } else {
      return $size;
    }
  }

    public function validation($field_key, $file_details, $form_id) {
      if (!function_exists('wp_check_filetype_and_ext')) {
        require_once ABSPATH . 'wp-admin/includes/file.php';
      }

      $formManager = new FormManager($form_id);
      $form_contents = $formManager->getFormContent();
      $field_content_details = $form_contents->fields;
      $fieldDetail = $field_content_details->{$field_key};
      $fieldType = $fieldDetail->typ;
      $maxSizeDetails = [];
      $allowFileTypes = [];
      if ('file-up' === $fieldType) {
        $allowFileTypes = !empty($fieldDetail->exts) ? $fieldDetail->exts : '';
        if (!empty($fieldDetail->mxUp)) {
          if (!empty($fieldDetail->mxUp)) {
            $maxSizeDetails['maxSize'] = $fieldDetail->mxUp . $fieldDetail->unit;
          }
        }
        if (!empty($allowFileTypes)) {
          $allowFileTypes = explode(',', $allowFileTypes);
        }
      }
      if (!empty($maxSizeDetails['maxSize'])) {
        $maxSize = $this->getByteSizeByUnit($maxSizeDetails['maxSize']);
      }

      $errorMessage = [
        'message'   => '',
        'error_type'=> '',
      ];

      if (is_array($file_details['name'])) {
        $totalSize = 0;
        foreach ($file_details['name']  as $key => $file) {
          if (!empty($file)) {
            $fileInfo = [
              'name'     => $file,
              'type'     => $file_details['type'][$key],
              'tmp_name' => $file_details['tmp_name'][$key],
              'error'    => $file_details['error'][$key],
              'size'     => $file_details['size'][$key],
            ];
            $totalSize += $fileInfo['size'];
            $validateState = $this->validateSingleFile($fieldType, $fileInfo, $allowFileTypes, $maxSize);
            if (!empty($validateState)) {
              return $validateState;
            }
          }
        }
        if (!is_null($maxTotalFileSize) && $totalSize > $maxTotalFileSize) {
          $errorMessage['message'] = __('Total File size is too large', 'bit-form');
          $errorMessage['error_type'] = 'file_size_error';
          return $errorMessage;
        }
      } else {
        $validateState = $this->validateSingleFile($fieldType, $file_details, $allowFileTypes, $maxSize);
        if (!empty($validateState)) {
          return $validateState;
        }
      }

      return $errorMessage;
    }

    private function validateSingleFile($fieldType, $file, $allowTypes, $maxSize) {
      $fileName = sanitize_file_name($file['name']);
      if (!empty($fileName)) {
        $fileSize = $file['size'];
        if (!empty($maxSize) && $fileSize > $maxSize) {
          return [
            'message'   => __('File size is too large', 'bit-form'),
            'error_type'=> 'file_size_error',
          ];
        }

        $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
        $fileExtAllowedByWp = wp_check_filetype_and_ext($file['tmp_name'], $fileName);
        $isAllowedFileType = in_array('.' . $fileExtension, $allowTypes);
        if ((!empty($allowTypes) && !$isAllowedFileType) || (empty($allowTypes) && empty($fileExtAllowedByWp['ext']))) {
          return [
            'message'   => __(($fileExtension ? ".{$fileExtension}" : 'empty') . ' file extension is not allowed', 'bit-form'),
            'error_type'=> 'file_type_error',
          ];
        }
      }
    }

  public function moveUploadedFiles($file_details, $form_id, $entry_id) {
    $file_upoalded = [];
    $_upload_dir = BITFORMS_UPLOAD_DIR . DIRECTORY_SEPARATOR . $form_id . DIRECTORY_SEPARATOR . $entry_id;
    wp_mkdir_p($_upload_dir);
    if (is_array($file_details['name'])) {
      foreach ($file_details['name'] as $key => $value) {
        //check accepted filetype in_array($file_details['name'][$key], $supported_files) else \
        if (!empty($value)) {
          $fileNamePattern = '/\_/';
          $file_upoalded[$key] = preg_replace($fileNamePattern, '', $value);
          $extension = pathinfo($file_upoalded[$key], PATHINFO_EXTENSION);
          if (in_array($extension, ['php', 'html', 'xhtml', 'js'])) {
            $extension = 'txt';
          }
          $uniqueName = wp_generate_uuid4();
          $UploadedFieldName = $uniqueName . '.' . $extension;
          $file_upoalded[$key] = $UploadedFieldName . '_' . $file_upoalded[$key];
          $move_status = \move_uploaded_file($file_details['tmp_name'][$key], $_upload_dir . DIRECTORY_SEPARATOR . $UploadedFieldName);
          if (!$move_status) {
            unset($file_upoalded[$key]);
          }
        }
      }
    } else {
      if (!empty($file_details['name'])) {
        $fileNamePattern = '/\_/';
        $fileName = sanitize_file_name($file_details['name']);
        $file_upoalded[0] = preg_replace($fileNamePattern, '', $fileName);
        $extension = pathinfo($file_upoalded[0], PATHINFO_EXTENSION);
        if (in_array($extension, ['php', 'html', 'xhtml', 'js'])) {
          $extension = 'txt';
        }
        $uniqueName = wp_generate_uuid4();
        $UploadedFieldName = $uniqueName . '.' . $extension;
        $move_status = \move_uploaded_file($file_details['tmp_name'], $_upload_dir . DIRECTORY_SEPARATOR . $UploadedFieldName);
        $file_upoalded[0] = $UploadedFieldName . '_' . $file_upoalded[0];

        if (!$move_status) {
          unset($file_upoalded[0]);
        }
      }
    }
    return $file_upoalded;
  }

  public function deleteFiles($form_id, $entry_id, $files) {
    $_upload_dir = BITFORMS_UPLOAD_DIR . DIRECTORY_SEPARATOR . $form_id . DIRECTORY_SEPARATOR . $entry_id;
    foreach ($files as $name) {
      unlink($_upload_dir . DIRECTORY_SEPARATOR . $name);
    }
  }
}
