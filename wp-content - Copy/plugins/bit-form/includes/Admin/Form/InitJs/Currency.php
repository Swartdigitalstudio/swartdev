<?php

namespace BitCode\BitForm\Admin\Form\InitJs;

class Currency
{
  public static function init($fk, $config, $contentId)
  {
    $selector = "#$contentId .{$fk}-currency-fld-wrp";
    return <<<INIT
          window.bf_globals.{$contentId}.inits['{$fk}'] = new bit_currency_field("{$selector}",{$config});
    INIT;
  }
}
