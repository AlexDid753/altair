<?php

namespace App\Http\Controllers\Admin;

class NewsController extends BaseAdminController
{
    public $model = 'App\Page';

    public $fields = [
        'name' => 'input',
        'published' => 'checkbox',
        'slug' => 'input',
        'fields' => 'template_fields',
    ];

    public function modelDefaults()
    {
        return [
            'parent_id' => 8,
            'template_id' => 3,
        ];
    }

    public function listWhere()
    {
        return ['template_id' => 3];
    }

}
