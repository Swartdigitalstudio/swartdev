<?php

namespace BitCode\BitForm\Admin\Form\InitJs;

class AdvancedFileUpload
{
  public static function init($fk, $config, $contentId)
  {
    $selector = "#$contentId #filepond-{$fk}-container";
    return <<<INIT
      window.bf_globals.{$contentId}.inits['{$fk}'] = new bit_advance_file_upload_field("{$selector}",{$config});
INIT;
  }
}
