<?php

namespace App\Http\Controllers\Admin;

use App\Page;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public $model;
    public $name;
    public $attributes = [
        //'fields' => '{}'
    ];

    public $fields = [
        'name' => 'input',
        'published' => 'checkbox',
        'slug' => 'input',
        'parent_id' => ['type' => 'dropdown', 'label' => 'Parent', 'model' => 'Page', 'method' => 'dropdown'],
        //'template_id' => ['type' => 'dropdown', 'label' => 'Template', 'model' => 'Template', 'method' => 'dropdown'],
        //'fields' => 'template_fields',
        'model' => 'Page'
    ];

    public function __construct()
    {
        if (!$this->model)
            $this->model = 'App\Page';

        if (!$this->name) {
            $this->name = "page";
        }
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }


    public function index()
    {
        return view('admin.pages.index', [
            'pages' => Page::all(),
            'paddind' => 0,
            'name' => $this->name
        ]);
    }


    public function create()
    {
        $model = new Page;

        return view('admin.pages.create', ['model' => $model, 'fields' => $this->fields]);
    }

    public function form(Request $request, $id = null)
    {
        $where = ['id' => $id];

        $model = $this->model::firstOrNew($where);

        // is get
        /*
        if ($request->isMethod('get'))
            return view()->first(['admin.' . $this->name . '.form', 'admin.base.form'], [
                'model' => $model,
                'name' => $this->name,
                'fields' => $this->fields
            ]);

        // is post
        $this->data = $request->all();
        $this->processDataBeforeFill();

        $model->fill($this->data);
        $this->validator($this->data, $model);

        if ($this->validator->fails())
            return view()->first(['admin.' . $this->name . '.form', 'admin.base.form'], [
                'model' => $model,
                'name' => $this->name,
                'fields' => $this->fields
            ])->withErrors($this->validator);

        // update
        if ($model->id) {
            if ($model->save())
                return redirect($this->redirectTo);
            else
                return view()->first(['admin.' . $this->name . '.form', 'admin.base.form'], [
                    'model' => $model,
                    'name' => $this->name,
                    'fields' => $this->fields
                ]);
        }

        $model->save();

        // new
        $this->processEventAfterCreate($model);

        return redirect($this->redirectTo);
        */
    }

    
    public function store(Request $request, $id = null)
    {
        $rules = Page::validatorRules();
        $validator = Validator::make(Input::all(), $rules);
        
        if ($validator->fails()) {
            return Redirect::to('admin/page/create')
                ->withErrors($validator);
        } else {
            
            if (isset($id)) {
                $page = Page::find($id);
                Session::flash('message', 'Successfully updated page!');
            }else {
                $page = new Page;
                Session::flash('message', 'Successfully created page!');
            }
            
            $page->name       = Input::get('name'); //todo сделать через набор атрибутов
            $page->slug       = Input::get('slug');
            $page->published       = Input::get('published');
            $page->parent_id       = Input::get('parent_id');

            $page->save();

            // redirect
            Session::flash('message', 'Successfully created page!');
            return Redirect::to('/admin/page');
        }
    }

    public function show(Page $page)
    {
        return view('admin.pages.show', compact('page')); //todo поставить маршрут на просмотр страницы на сайте не в админке
    }

    public function edit($id)
    {
        $model = Page::find($id);

        return view('admin.pages.edit', ['model' => $model, 'fields' => $this->fields]);
    }

    public function update(Request $request, $id)
    {
        $this->store($request,$id);
        return Redirect::to('/admin/page');
    }


    public function delete($id)
    {
        $page = Page::find($id);
        $page->delete();

        Session::flash('message', 'Successfully deleted page!');
        return Redirect::to('/admin/page');
    }

    public function child(Request $request, $id = null)
    {
        /* todo переделать
        $from = $this->model::where(['id' => $id])->first();
        if (!$from)
            return redirect($this->redirectTo);

        $to = new $this->model($from->getAttributes());
        $to->name = $to->name . ' - copy';
        $to->parent_id = $from->id;

        if (!empty($to->fields))
            $to->fields = json_decode($to->fields);

        $to->save();
        return redirect($this->redirectTo);
        */
        return Redirect::to('/admin/page');

    }

}
