<?php

namespace BitCode\BitForm\Core\Fallback;

use BitCode\BitForm\Core\Database\FormModel;

class Form
{
  public function resetJsGeneratedPageIds()
  {
    $formModel = new FormModel();
    $formModel->update(
      [
        'generated_script_page_ids' => wp_json_encode((object) []),
      ],
      [
        'status' => 1
      ]
    );
  }
}
