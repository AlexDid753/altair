<?php

namespace App\Http\Controllers\Admin;

use App\Category;


class CategoryController extends BaseAdminController
{

    public $fields = [
        'title' => 'input',
        'published' => 'checkbox',
        'slug' => 'input',
        'url' => ['type' => 'input', "attributes"=>['readonly'=>'readonly']],
        'parent_id' => ['type' => 'dropdown', 'label' => 'Parent', 'model' => 'Category', 'method' => 'dropdown'],

        'text' => 'editor',
        'images' => 'multi_image',

        'meta_title' => 'input',
        'meta_description' => 'input',
        'meta_keywords' => 'input'

    ];

    public function __construct()
    {
        if (!$this->model)
            $this->model = 'App\Category';

        if (!$this->name) {
            $this->name = "category";
        }
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function index()
    {
        if ($this->listWhere())
            $models = $this->model::where($this->listWhere())->orderBy('id')->paginate(50);
        else
            $models = $this->model::orderBy('id')->paginate(50);

        return view()->first(['admin.' . $this->name . '.list', 'admin.base.index_tree'], [
            'models' => $models,
            'name' => $this->name
        ]);
    }



}
