<?php

namespace App\Http\Controllers\Admin;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;



class ProductController extends BaseAdminController
{

    public $fields = [
        'title' => 'input',
        'published' => 'checkbox',
        'slug' => 'input',
        'url' => ['type' => 'input', "attributes"=>['readonly'=>'readonly']],
        'parent_id' => ['type' => 'dropdown', 'label' => 'Parent', 'model' => 'Category', 'method' => 'dropdown'],
        'code' => ['type' => 'input', "attributes"=>['style'=>"style='text-transform: uppercase;'"]],
        'presence' => 'checkbox',


        'text' => 'editor',
        'price' => ['type' => 'input', 'input_type' => 'number'],
        'old_price' => ['type' => 'input', 'input_type' => 'number'],
        'link' => ['type' => 'input', "attributes"=>['placeholder' => "placeholder='Например: http://site.ru'"]],
        'link_text' => 'input',
        'images' => 'multi_image',

        'weight' => ['type' => 'input', 'input_type' => 'number', "attributes"=>['step' => "step='0.01' placeholder='В граммах'"]],
        'sample' => 'input',
        'material' => 'input',
        'piece' => 'input',
        'connected_products' => ['type' => 'input',
            "attributes"=>['placeholder' =>
                "placeholder='ID товаров строго через запятую, например: 56,49' "]],


        'meta_title' => 'input',
        'meta_description' => 'input',
        'meta_keywords' => 'input',

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
            $models = $this->model::where($this->listWhere())->orderBy('id')->paginate(50);
        else
            $models = $this->model::orderBy('id')->paginate(50);

        return view()->first(['admin.' . $this->name . '.list', 'admin.product.index'], [
            'models' => $models,
            'name' => $this->name
        ]);
    }

    public function create()
    {
        $model = new $this->model;
        $categories = $this->getCategories();

        return view('admin.product.create', [
            'model' => $model,
            'fields' => $this->fields,
            'categories' => $categories,
            'class_name' => strtolower((new \ReflectionClass($model))->getShortName())
        ]);
    }

    public function edit($id)
    {
        $model = $this->model::find($id);
        $categories = $this->getCategories();
        return view('admin.product.edit', [
            'model' => $model,
            'name' => $this->name,
            'fields' => $this->fields,
            'categories' => $categories,
            'class_name' => strtolower((new \ReflectionClass($model))->getShortName())
        ]);
    }




}
