<?php

use BitCode\BitForm\Core\Fallback\FallBack;

/*
 * Add fallbacks
 * only class working under BitCode\BitForm\Core\Fallback\.
 */
FallBack::add('1.0.4', 'FormEntFallBackryMetaChange@changeMeta');
FallBack::add('1.4.1', 'Field@addButton');
FallBack::add('1.4.7', 'Validation@errorMessage');
FallBack::add('1.4.11', 'Field@buttonValidsObject');
FallBack::add('1.4.12.2', 'Validation@email');
FallBack::add('1.5.2', 'Report@report');
FallBack::add('1.6.2', 'WorkFlow@conditionalLogic');
Fallback::add('2.0.10', 'Field@phoneNumberMissingPattern');
Fallback::add('2.0.10', 'Form@resetJsGeneratedPageIds');
