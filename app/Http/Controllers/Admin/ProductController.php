<?php

namespace App\Http\Controllers\Admin;

use App\Product;


class ProductController extends BaseAdminController
{

    public $fields = [
        'title' => 'input',
        'published' => 'checkbox',
        'slug' => 'input',
        'url' => 'input_readonly',
        'parent_id' => ['type' => 'dropdown', 'label' => 'Parent', 'model' => 'Category', 'method' => 'dropdown'],

        'meta_title' => 'input',
        'meta_description' => 'input',
        'meta_keywords' => 'input'

    ];

    public function __construct()
    {
        if (!$this->model)
            $this->model = 'App\Product';

        if (!$this->name) {
            $this->name = "product";
        }
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function index()
    {
        if ($this->listWhere())
            $models = $this->model::where($this->listWhere())->paginate(50);
        else
            $models = $this->model::paginate(50);

        return view()->first(['admin.' . $this->name . '.list', 'admin.product.index'], [
            'models' => $models,
            'name' => $this->name
        ]);
    }


}
