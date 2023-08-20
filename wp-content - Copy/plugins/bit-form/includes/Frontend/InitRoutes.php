<?php

use BitCode\BitForm\Frontend\CustomRoutes;
use BitCode\BitForm\Frontend\FormEntryView;
use BitCode\BitForm\Frontend\StandaloneFormView;

$routes = new CustomRoutes();
if (defined('BITAPPS_DEV') && BITAPPS_DEV) {
  $routes->add('bitform-form-view/([0-9]+)/?', [StandaloneFormView::class, 'preview']);
}
$routes->add('bitform-form-entry-edit/([0-9]+)/?([0-9]+)/?', [FormEntryView::class, 'preview']);
