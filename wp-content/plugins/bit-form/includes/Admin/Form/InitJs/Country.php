<?php

namespace BitCode\BitForm\Admin\Form\InitJs;

class Country
{
  public static function init($fk, $config, $contentId)
  {
    $selector = "#$contentId .{$fk}-country-fld-wrp";
    return <<<INIT
        window.bf_globals.{$contentId}.inits['{$fk}'] = new bit_country_field("{$selector}",{$config});
INIT;
  }
}
