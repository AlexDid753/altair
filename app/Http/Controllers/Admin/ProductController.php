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

        'text' => 'editor',
        'price' => ['type' => 'input', 'input_type' => 'number', "attributes"=>['step' => "step='0.01'"]],
        'old_price' => ['type' => 'input', 'input_type' => 'number' , "attributes"=>['step' => "step='0.01'"]],
        'images' => 'multi_image',

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
            $models = $this->model::where($this->listWhere())->paginate(50);
        else
            $models = $this->model::paginate(50);

        return view()->first(['admin.' . $this->name . '.list', 'admin.product.index'], [
            'models' => $models,
            'name' => $this->name
        ]);
    }

    public function store(Request $request, $id = null)
    {
        $rules = $this->model::validatorRules();
        $validator = Validator::make(Input::all(), $rules);

        if ($validator->fails()) {
            return Redirect::to('admin/'.$this->name.'/create')
                ->withErrors($validator);
        } else {

            if (isset($id)) {
                $model = $this->model::find($id);
                Session::flash('message', 'Продукт обновлен!');
            }else {
                $model = new $this->model();
                Session::flash('message', 'Продукт создан!');
            }
            $this->data = $request->all();

            //Синхронизация связей с категориями
            if (array_key_exists('categories', $this->data)){
                $model->categories()->sync($this->data['categories']);
            }
            if (array_key_exists('parent_id', $this->data)) {
                $model->categories()->syncWithoutDetaching(intval($this->data['parent_id']));
            }

            foreach ($this->fields as $field_name => $value) {
                $model->$field_name = Input::get($field_name);
            }

            $model->save();

            return Redirect::to('/admin/'.$this->name);
        }
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
