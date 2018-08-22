<?php

namespace App\Http\Controllers\Admin;

use App\Page;
use App\Template;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;


class TemplateController extends Controller
{
    public $fields = [
        'name' => 'input',
        'view' => 'input',
        'fields' => 'multi_name_type'
    ];

    public $name;
    public $model;
    public $data;
    protected $validator;
    protected $redirectTo;

    public function __construct()
    {
        if (!$this->model)
            $this->model = 'App\Template';

        if (!$this->name) {
            $this->name = "template";
        }
    }

    public function index()
    {
        return view('admin.template.index', [
            'models' => Template::all(),
            'paddind' => 0,
            'name' => $this->name
        ]);
    }

    public function create()
    {
        $model = new Template();
        return view('admin.template.create', ['model' => $model, 'fields' => $this->fields]);
    }

    public function destroy($id)
    {
        $model = Template::find($id);
        $model->delete();

        Session::flash('message', 'Successfully deleted template!');
        return Redirect::to('/admin/template');
    }

    public function form(Request $request, $id = null)
    {
        $where = ['id' => $id];

        $model = $this->model::firstOrNew($where);
    }

    public function store(Request $request, $id = null)
    {
        $rules = Template::validatorRules();
        $validator = Validator::make(Input::all(), $rules);

        if ($validator->fails()) {
            return Redirect::to('admin/template/create')
                ->withErrors($validator);
        } else {

            if (isset($id)) {
                $model = Template::find($id);
                Session::flash('message', 'Successfully updated template!');
            }else {
                $model = new Template();
                Session::flash('message', 'Successfully created template!');
            }

            foreach ($this->fields as $field_name => $value) {
                $model->$field_name       = Input::get($field_name);
            }


            $model->save();

            // redirect
            Session::flash('message', 'Successfully created template!');
            return Redirect::to('/admin/template');
        }
    }

    public function delete($id)
    {
        $model = $this->model::find($id);
        $model->delete();

        Session::flash('message', 'Successfully deleted '.$this->name.'!');
        return Redirect::to("/admin/".$this->name);
    }
}
