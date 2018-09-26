<?php

namespace App\Http\Controllers\Admin;

use App\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends BaseAdminController
{
    public $fields = [
        'name' => ['type' => 'input', "attributes"=>['readonly'=>'readonly']],
        'phone' => ['type' => 'input', "attributes"=>['readonly'=>'readonly']],
        'email' => ['type' => 'input', "attributes"=>['readonly'=>'readonly']],
        'message' => ['type' => 'text', "attributes"=>['readonly'=>'readonly']],
        'products'=> ['type' => 'feedback_products']
    ];


    public function __construct()
    {
        if (!$this->model)
            $this->model = 'App\Feedback';

        if (!$this->name) {
            $this->name = "feedback";
        }
    }

    public function index()
    {
        if ($this->listWhere())
            $models = $this->model::where($this->listWhere())->orderBy('id')->paginate(50);
        else
            $models = $this->model::orderBy('id')->paginate(50);

        return view()->first(['admin.' . $this->name . '.list', 'admin.feedback.index'], [
            'models' => $models,
            'name' => $this->name
        ]);
    }

    public function edit($id)
    {
        $model = $this->model::find($id);
        $categories = $this->getCategories();
        return view('admin.feedback.edit', [
            'model' => $model,
            'name' => $this->name,
            'fields' => $this->fields,
            'categories' => $categories,
            'class_name' => strtolower((new \ReflectionClass($model))->getShortName())
        ]);
    }
}
