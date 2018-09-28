<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Input;


class BaseAdminController extends Controller
{
    public $name;
    public $model;
    public $data;
    public $fields;
    protected $validator;
    protected $redirectTo;

    public function __construct()
    {
        if (!$this->name) {
            $action = app('request')->route()->getAction();
            $controller = class_basename($action['controller']);
            list($controller, $action) = explode('@', $controller);
            $this->name = snake_case(str_replace('Controller', '' , $controller));
        }

        if (!$this->model)
            $this->model = 'App\\' . studly_case($this->name);

        if (!$this->redirectTo)
            $this->redirectTo = '/admin/' . $this->name;
    }


    public function create()
    {
        $model = new $this->model;
        $categories = $this->getCategories();

        return view('admin.base.create', [
            'model' => $model,
            'fields' => $this->fields,
            'categories' => $categories,
            'class_name' => strtolower((new \ReflectionClass($model))->getShortName())
        ]);
    }

    public function index()
    {
        if ($this->listWhere())
            $models = $this->model::where($this->listWhere())->orderBy('id')->paginate(50);
        else
            $models = $this->model::orderBy('id')->paginate(50);

        return view()->first(['admin.' . $this->name . '.list', 'admin.base.index'], [
            'models' => $models,
            'name' => $this->name
        ]);
    }

    public function edit($id)
    {
        $model = $this->model::find($id);
        $categories = $this->getCategories();
        return view('admin.base.edit', [
            'model' => $model,
            'name' => $this->name,
            'fields' => $this->fields,
            'categories' => $categories,
            'class_name' => strtolower((new \ReflectionClass($model))->getShortName())
        ]);
    }

    public function getCategories(){
        if ($this->name == 'product' || $this->name == 'category') {
            return $categories = Category::all();
        }
    }

    public function update(Request $request, $id)
    {
        $rules = $this->model::find($id)->validatorRules('PUT');
        $validator = Validator::make(Input::all(), $rules);
        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }else {
            $this->store($request,$id);
            return Redirect::to('/admin/'.$this->name);
        }
    }

    public function store(Request $request, $id = null)
    {
        if (isset($id)) {
            $model = $this->model::find($id);
        }else {
            $model = new $this->model();
        }
        $method = $request->method();
        $rules = $model->validatorRules($method);
        $validator = Validator::make(Input::all(), $rules);
        if ($validator->fails()) {
            return Redirect::to('admin/'.$this->name.'/create')
                ->withErrors($validator);
        } else {
            if ($request->method() == 'POST') {
                Session::flash('message', 'Успешно создано!');
            }else {
                Session::flash('message', 'Успешно обновлено!');
            }
            $this->data = $request->all();
            foreach ($this->fields as $field_name => $value) {
                $model->$field_name = Input::get($field_name);
            }
            $model->save();

            return Redirect::to('/admin/'.$this->name);
        }
    }

    public function delete($id)
    {
        $model = $this->model::find($id);
        $model->delete();

        Session::flash('message', 'Удалено!');
        return Redirect::to('/admin/'.$this->name);
    }

    public function listWhere()
    {

    }

}


