<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use Illuminate\Contracts\View\View;


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


        if (!$this->model)
            $this->model = 'App\User';


    }

    public function index(){
        return view('admin.user', ['users' => User::all()]);
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

        return view()->first(['admin.' . $this->name . '.list', 'admin.base.form'], [
            'model' => $model,
            'name' => $this->name
        ]);

    }

}


