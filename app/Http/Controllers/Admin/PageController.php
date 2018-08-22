<?php

namespace App\Http\Controllers\Admin;

use App\Page;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;

class PageController extends BaseAdminController
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

    public function show(Page $page)
    {
        return view('admin.page.show', compact('page')); //todo поставить маршрут на просмотр страницы на сайте не в админке
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
