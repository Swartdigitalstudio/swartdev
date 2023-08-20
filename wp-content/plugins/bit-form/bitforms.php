<?php

/**
 * Plugin Name: Bit Form
 * Plugin URI:  https://www.bitapps.pro/bit-form
 * Description: Easiest Contact Form Plugin with the fastest Drag & Drop form builder in WordPress to create modern & responsive contact, payment & registration forms with 100+ integrations
 * Version:     2.3.0
 * Author:      Contact Form Builder Plugin - Bit Form
 * Author URI:  https://www.bitapps.pro
 * Text Domain: bit-form
 * Requires PHP: 5.6
 * Domain Path: /languages
 * License: GPLv2 or later
 */

/***
 * If try to direct access  plugin folder it will Exit
 **/
if (!defined('ABSPATH')) {
  exit;
}

// Define most essential constants.
define('BITFORMS_VERSION', '2.3.0');
define('BITFORMS_PLUGIN_MAIN_FILE', __FILE__);

global $bitforms_db_version;
$bitforms_db_version = '2.2';

if (version_compare(PHP_VERSION, '5.6.0', '>=')) {
  $rootVersionFolder = '';
  $olderVersion = get_option('bitforms_version');
  if ('2.0-beta.1' === $olderVersion) {
    update_option('bitforms_migrated_to_v2', true);
    update_option('bitforms_migrating_to_v2', false);
  }
  $isMigratedToV2 = get_option('bitforms_migrated_to_v2');
  $isMigratingToV2 = get_option('bitforms_migrating_to_v2');

  if (!$isMigratingToV2 && !$isMigratedToV2) {
    global $wpdb;
    $oldForms = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}bitforms_form");
    if (count($oldForms) > 0) {
      $rootVersionFolder = 'v1/';
    } else {
      update_option('bitforms_migrated_to_v2', true);
    }
  }
  require_once plugin_dir_path(__FILE__) . $rootVersionFolder . 'includes/loader.php';
}
/**
 * Handles plugin activation.
 *
 * Throws an error if the plugin is activated on an older version than PHP 5.6.
 */
function bitforms_activate_plugin($network_wide)
{
  if (version_compare(PHP_VERSION, '5.6.0', '<')) {
    wp_die(
      esc_html__('bitforms requires PHP version 5.6.', 'bit-form'),
      esc_html__('Error Activating', 'bit-form')
    );
  }

  do_action('bitforms_activation', $network_wide);
}

register_activation_hook(__FILE__, 'bitforms_activate_plugin');

/**
 * Handles plugin deactivation.
 */
function bitforms_deactivate_plugin($network_wide)
{
  if (version_compare(PHP_VERSION, '5.6.0', '<')) {
    return;
  }

  do_action('bitforms_deactivation', $network_wide);
}

register_deactivation_hook(__FILE__, 'bitforms_deactivate_plugin');

/**
 * Handles plugin uninstall.
 *
 * @access private
 */
function bitforms_uninstall_plugin()
{
  if (version_compare(PHP_VERSION, '5.6.0', '<')) {
    return;
  }

  do_action('bitforms_uninstall');
}
register_uninstall_hook(__FILE__, 'bitforms_uninstall_plugin');
