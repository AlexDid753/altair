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
        'page_id' => ['type' => 'dropdown_menu', 'label' => 'Page', 'model' => 'Page',  'method' => 'dropdownMenu'],
        'page_type' => ['type' => 'input', 'label' => 'Тип станицы', "attributes"=>['readonly'=>'readonly']]
    ];

    public function index()
    {
        $models = $this->model::where(['parent_id' => null])->orderBy('id')->paginate(50);
        return view('admin.base.index_tree', [
            'models' => $models,
            'name' => $this->name
        ]);
    }

}
