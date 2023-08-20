<?php

namespace BitCode\BitForm\Core\Util;

final class Utilities
{
  public static function isPro()
  {
    $integrateData = get_option('bitformpro_integrate_key_data');
    $isProLicenseActivated = !empty($integrateData) && is_array($integrateData) && 'success' === $integrateData['status'];
    return class_exists('BitCode\\BitFormPro\\Plugin') && $isProLicenseActivated;
  }
}
