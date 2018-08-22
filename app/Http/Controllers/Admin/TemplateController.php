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


class TemplateController extends BaseAdminController
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

}
