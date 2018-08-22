<?php

namespace App\Http\Controllers\Admin;

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

    public function index(){
        return view('admin.'.$this->name.'.index', [
            'models' => $this->model::all(),
            'paddind' => 0,
            'name' => $this->name
        ]);
    }

    public function create()
    {
        $model = new $this->model;

        return view('admin.'.$this->name.'.create', ['model' => $model, 'fields' => $this->fields]);
    }

    public function list(Request $request)
    {
        if ($this->listWhere())
            $models = $this->model::where($this->listWhere())->paginate(50);
        else
            $models = $this->model::paginate(50);

        return view()->first(['admin.' . $this->name . '.list', 'admin.base.list'], [
            'models' => $models,
            'name' => $this->name
        ]);
    }

    public function edit($id)
    {
        $model = $this->model::find($id);

        return view('admin.' . $this->name . '.edit', [
            'model' => $model,
            'name' => $this->name,
            'fields' => $this->fields
        ]);
    }

    public function update(Request $request, $id)
    {
        $this->store($request,$id);
        return Redirect::to('/admin/'.$this->name);
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

        Session::flash('message', 'Successfully deleted '.$this->name.'!');
        return Redirect::to('/admin/'.$this->name);
    }

}


