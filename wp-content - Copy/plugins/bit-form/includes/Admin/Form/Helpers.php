<?php

namespace BitCode\BitForm\Admin\Form;

class Helpers
{
  public static function scriptLoader($src, $id, $instanceObj = null, $selector = '', $attrs = [], $integrity = null, $contentId = '')
  {
    $attributes = json_encode($attrs);
    $instObj = '';
    if ($instanceObj) {
      $instObj .= <<<INST
script.onload = function () {
  bfSelect('#{$contentId}').querySelectorAll('{$selector}').forEach(function(fld){
    $instanceObj;
  });
}
INST;
    }
    return <<<LOAD_SECRIPT
var script =  document.createElement('script'), integrity = '$integrity', attrs = $attributes, id = '$id';
script.src = '$src';
script.id = id;
if(integrity){
  script.integrity = integrity;
  script.crossOrigin = 'anonymous';
}
if(attrs){
  Object.entries(attrs).forEach(function([key, val]){
    script.setAttribute(key,val);
  })
}
$instObj;
var bodyElm = document.body;
var alreadyExistScriptElm = bodyElm ? bodyElm.querySelector('script#$id'):null;
if(alreadyExistScriptElm){
  bodyElm.removeChild(alreadyExistScriptElm)
}
if(!(window.recaptcha && id === 'g-recaptcha-script')){
  bodyElm.appendChild(script);
}
LOAD_SECRIPT;
  }

  public static function minifyJs($input)
  {
    if ('' === trim($input)) {
      return $input;
    }
    return preg_replace(
      [
        '/ {2,}/',
        '/\s*=\s*/',
        '/\s*,\s*/',
        '/\s+(?=\(|\{|\:|\?)|\t|(?:\r?\n[ \t]*)+/s'
      ],
      [' ', '=', ',', ''],
      $input
    );
  }

  /**
   * @method name : saveFile
   * @description : save js/css field to disk
   * @param  : $path => like(dirName/css), $fileName => main.css, $script
   * @return : boolean
   */
  public static function saveFile($path, $fileName, $script, $fileOpenMode = 'a')
  {
    $rootDir = BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR;
    $path = trim($path, '/');
    $pathArr = explode('/', $path); // like "fieldname/user => [Fieldname, user]
    foreach ($pathArr as $d) {
      $rootDir .= $d . DIRECTORY_SEPARATOR;
      if (!realpath($rootDir)) {
        mkdir($rootDir);
      }
    }
    $fullPath = $rootDir . $fileName;
    $file = fopen($fullPath, $fileOpenMode);
    fwrite($file, $script);
    fclose($file);
    return true;
  }

  /**
   * @method name : generatePathDirOrFile
   * @dscription : generate path for js/css file
   * @params : $path => like(dirName/css)
   * @return : a string of full path
   */
  public static function generatePathDirOrFile($path)
  {
    $rootDir = BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR;
    $path = trim($path, '/');
    $pathArr = explode('/', $path); // like "fieldname/user => [Fieldname, user]
    foreach ($pathArr as $d) {
      $rootDir .= $d . DIRECTORY_SEPARATOR;
    }
    return rtrim($rootDir, DIRECTORY_SEPARATOR);
  }

  public static function fileRead($filePath)
  {
    $fileContent = '';
    if (file_exists($filePath)) {
      $file = fopen($filePath, 'r');
      $fileContent .= fread($file, filesize($filePath));
      fclose($file);
    }
    return $fileContent;
  }

  public static function getDataFromNestedPath($data, $key)
  {
    $keys = explode('->', $key);
    $lastKey = array_pop($keys);
    $dataType = is_array($data) ? 'array' : (is_object($data) ? 'object' : '');
    if ('array' === $dataType) {
      return self::accessFromArray($data, $keys, $lastKey);
    }
    if ('object' === $dataType) {
      return self::accessFromObject($data, $keys, $lastKey);
    }
  }

  private static function accessFromObject($data, $keys, $lastKey)
  {
    foreach ($keys as $k) {
      if (!property_exists($data, $k)) {
        return null;
      }
      $data = $data->$k;
    }
    return isset($data->$lastKey) ? $data->$lastKey : null;
  }

  private static function accessFromArray($data, $keys, $lastKey)
  {
    foreach ($keys as $k) {
      if (!array_key_exists($k, $data)) {
        return null;
      }
      $data = $data[$k];
    }
    return isset($data[$lastKey]) ? $data[$lastKey] : null;
  }

  public static function setDataToNestedPath($data, $key, $value)
  {
    $keys = explode('->', $key);
    $lastKey = array_pop($keys);
    foreach ($keys as $k) {
      if (!array_key_exists($k, $data)) {
        $data->$k = (object) [];
      }
      $data = $data->$k;
    }
    $data->$lastKey = json_decode(json_encode($value));
    ;
    return $data;
  }

  public static function property_exists_nested($obj, $path = '', $valToCheck = null, $checkNegativeVal = 0)
  {
    $path = explode('->', $path);
    $current = $obj;
    foreach ($path as $key) {
      if (is_object($current)) {
        if (property_exists($current, $key)) {
          $current = $current->{$key};
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    if (isset($valToCheck)) {
      if ($checkNegativeVal) {
        return $current !== $valToCheck;
      }
      return $current === $valToCheck;
    }
    return true;
  }

  public static function honeypotEncryptedToken($str)
  {
    $token = base64_encode(base64_encode($str));
    return $token;
  }

  public static function csrfEecrypted()
  {
    $secretKey = get_option('bf_csrf_secret');
    if (!$secretKey) {
      $secretKey = 'bf-' . time();
      update_option('bf_csrf_secret', $secretKey);
    }
    $tIdenty = base64_encode(random_bytes(32));
    $csrf = \base64_encode(\hash_hmac('sha256', $tIdenty, $secretKey, true));
    return ['csrf' => $csrf, 't_identity' => $tIdenty];
  }

  public static function csrfDecrypted($identy, $token)
  {
    $secretKey = get_option('bf_csrf_secret');
    return \hash_equals(
      \base64_encode(\hash_hmac('sha256', $identy, $secretKey, true)),
      $token
    );
  }
}
