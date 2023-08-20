<?php

namespace BitCode\BitForm\Core\Migration;

use BitCode\BitForm\Core\Database\IntegrationModel;
use BitCode\BitForm\Core\Integration\IntegrationHandler;

final class MigrateForms
{
  public function migrateToV2()
  {
    $v1FormContents = get_transient('bitforms_v1_form_contents');
    $newFormContents = [];
    foreach ($v1FormContents as $formContents) {
      $migrationHandler = new Migration(json_decode(json_encode($formContents)));
      $newFormContents[] = $migrationHandler->migrate();
    }
    self::migratePaypal();
    $config = (object) [];
    $config->delete_table = true;
    $this->duplicateV1StyleFiles();
    update_option('bitform_app_config', $config);
    return $newFormContents;
  }

  public function rollbackToV1()
  {
    $this->dropTableAndRename('form', 'form_v1');
    $this->dropTableAndRename('workflows', 'workflows_v1');
    $this->dropTableAndRename('success_messages', 'success_messages_v1');
    $source = BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR . 'form-styles';
    MigrationHelper::recursiveDeleteFiles($source);
    $destination = BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR . 'form-styles-v1';
    MigrationHelper::recursiveCopyFiles($destination, $source);
    MigrationHelper::recursiveDeleteFiles($destination);
    if (file_exists($destination)) {
      rmdir($destination);
    }
    delete_option('bitforms_migrating_to_v2');
    delete_option('bitforms_migrated_to_v2');
  }

  private function duplicateV1StyleFiles()
  {
    $source = BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR . 'form-styles';
    $destination = BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR . 'form-styles-v1';
    if (!file_exists(BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR . 'form-styles-v1')) {
      wp_mkdir_p(BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR . 'form-styles-v1');
    }
    MigrationHelper::recursiveCopyFiles($source, $destination);
    MigrationHelper::recursiveDeleteFiles($source);
  }

  private static function migratePaypal()
  {
    $integrationHandler = new IntegrationHandler(0);
    $formIntegrations = $integrationHandler->getAllIntegration('app', 'payments');
    if (!is_wp_error($formIntegrations)) {
      return false;
    }
    $integrationModel = new IntegrationModel();

    foreach ($formIntegrations as $payment) {
      $integrationDetails = json_decode($payment->integration_details);
      if ('PayPal' === $integrationDetails->type) {
        $integrationDetails->mode = 'live';
        $integrationDetails->clientSecret = '';
        $integrationModel->update([
          'integration_details' => json_encode($integrationDetails),
        ], [
          'id' => $payment->id,
        ]);
      }
    }
    return true;
  }

  private function dropTableAndRename($deletedTableName, $renamedTableName)
  {
    global $wpdb;
    $deleteTable = "{$wpdb->prefix}bitforms_{$deletedTableName}";
    $renameTable = "{$wpdb->prefix}bitforms_{$renamedTableName}";
    $wpdb->query("DROP TABLE IF EXISTS $deleteTable");
    $wpdb->query("RENAME TABLE $renameTable TO $deleteTable");
  }
}
