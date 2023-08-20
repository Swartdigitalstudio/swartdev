<?php

namespace BitCode\BitForm;

$scheme = parse_url(home_url())['scheme'];
$uploadDirInfo = wp_upload_dir();
$wpUploadbaseDir = $uploadDirInfo['basedir'];
$wpUploadBaseURL = set_url_scheme($uploadDirInfo['baseurl'], $scheme);
$bitformsUploadBaseDir = $wpUploadbaseDir . '/bitforms';
// Define global constants.
// define DEV=true|false in wp-config.php
define('BIT_DEV', defined('DEV') && DEV ? 'http://localhost:3001' : false);
define('BITFORMS_PLUGIN_BASENAME', plugin_basename(BITFORMS_PLUGIN_MAIN_FILE));
define('BITFORMS_PLUGIN_DIR_PATH', plugin_dir_path(BITFORMS_PLUGIN_MAIN_FILE) . 'v1/');
define('BITFORMS_UPLOAD_DIR', $bitformsUploadBaseDir . '/uploads');
define('BITFORMS_CONTENT_DIR', $bitformsUploadBaseDir);
define('BITFORMS_ROOT_URI', set_url_scheme(plugins_url('', BITFORMS_PLUGIN_MAIN_FILE), $scheme) . '/v1');
define('BITFORMS_ASSET_URI', BITFORMS_ROOT_URI . '/assets');
define('BITFORMS_ASSET_JS_URI', BIT_DEV ? BIT_DEV : BITFORMS_ROOT_URI . '/assets/js');
define('BITFORMS_ASSET_FRNT_JS_URI', BITFORMS_ROOT_URI . '/assets/js');
define('BITFORMS_UPLOAD_BASE_URL', $wpUploadBaseURL . '/bitforms');

// Autoload vendor files.
require_once BITFORMS_PLUGIN_DIR_PATH . 'vendor/autoload.php';
// Initialize the plugin.
Plugin::load(BITFORMS_PLUGIN_MAIN_FILE);
