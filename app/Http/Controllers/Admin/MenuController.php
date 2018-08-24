<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

class MenuController extends BaseAdminController
{

    public $fields = [
        'name' => 'input',
        'published' => 'checkbox',
        'sort' => 'input',
        'parent_id' => ['type' => 'dropdown', 'label' => 'Parent', 'model' => 'Menu', 'method' => 'dropdown'],
        'page_id' => ['type' => 'dropdown', 'label' => 'Page', 'model' => 'Page', 'method' => 'dropdownMenu'],
        'url' => 'input'
    ];

    public function index()
    {
        $models = $this->model::where(['parent_id' => null])->get();
        return view('admin.page.index', [
            'models' => $models,
            'name' => $this->name
        ]);
    }

}