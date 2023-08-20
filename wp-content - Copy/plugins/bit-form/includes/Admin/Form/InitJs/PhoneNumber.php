<?php

namespace BitCode\BitForm\Admin\Form\InitJs;

class PhoneNumber {
  public static function init($fk, $config, $contentId) {
    $selector = "#$contentId .{$fk}-phone-fld-wrp";
    return <<<INIT
        window.bf_globals.{$contentId}.inits['{$fk}'] = new bit_phone_number_field("{$selector}",{$config});
INIT;
  }
}
