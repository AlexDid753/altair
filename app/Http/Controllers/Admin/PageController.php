<?php

namespace App\Http\Controllers\Admin;

use App\Page;


class PageController extends BaseAdminController
{

    public $fields = [
        'name' => 'input',
        'published' => 'checkbox',
        'slug' => 'input',
        'url' => ['type' => 'input', "attributes"=>['readonly'=>'readonly']],
        'parent_id' => ['type' => 'dropdown', 'label' => 'Parent', 'model' => 'Page', 'method' => 'dropdown'],
        'template_id' => ['type' => 'dropdown', 'label' => 'Template', 'model' => 'Template', 'method' => 'dropdown'],
        'fields' => 'template_fields',

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

    public function index()
    {
        if ($this->listWhere())
            $models = $this->model::where($this->listWhere())->orderBy('id')->paginate(50);
        else
            $models = $this->model::orderBy('id')->paginate(50);

        return view()->first(['admin.' . $this->name . '.list', 'admin.base.index_tree'], [
            'models' => $models,
            'name' => $this->name
        ]);
    }

}
