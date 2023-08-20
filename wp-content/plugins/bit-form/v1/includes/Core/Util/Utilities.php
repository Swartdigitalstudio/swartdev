<?php

namespace BitCode\BitForm\Core\Util;

final class Utilities {
  public static function duplicateDbTable($oldTableName, $newTableName) {
    global $wpdb;
    $oldTable = "{$wpdb->prefix}bitforms_{$oldTableName}";
    $newTable = "{$wpdb->prefix}bitforms_{$newTableName}";
    $wpdb->query("CREATE TABLE IF NOT EXISTS $newTable LIKE $oldTable");
    $wpdb->query("INSERT $newTable SELECT * FROM $oldTable");
  }
}
