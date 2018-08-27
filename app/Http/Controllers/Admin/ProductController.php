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
                Session::flash('message', 'Successfully updated '.$this->name.'!');
            }else {
                $model = new $this->model();
                Session::flash('message', 'Successfully created '.$this->name.'!');
            }
            $this->data = $request->all();

            foreach ($this->fields as $field_name => $value) {
                $model->$field_name = Input::get($field_name);
            }

            $model->categories()->sync($this->data['categories']);

            $model->save();

            return Redirect::to('/admin/'.$this->name);
        }
    }



}
