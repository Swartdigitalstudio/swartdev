<?php

namespace BitCode\BitForm\Admin\Form\InitJs;

class Select
{
  public static function init($fk, $config, $contentId)
  {
    $selector = "#$contentId .{$fk}-dpd-fld-wrp";
    return <<<INIT
      window.bf_globals.{$contentId}.inits['{$fk}'] = new bit_dropdown_field("{$selector}",{$config});
INIT;
  }
}
