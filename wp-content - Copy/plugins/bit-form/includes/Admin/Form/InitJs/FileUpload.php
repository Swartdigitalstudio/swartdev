<?php

namespace BitCode\BitForm\Admin\Form\InitJs;

class FileUpload {
  public static function init($fk, $config, $contentId) {
    $selector = "#$contentId .{$fk}-file-up-wrpr";
    return <<<INIT
      window.bf_globals.{$contentId}.inits['{$fk}'] = new bit_file_up_field("$selector",{$config});
INIT;
  }
}
