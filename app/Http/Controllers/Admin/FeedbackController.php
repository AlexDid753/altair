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
        'products'=> ['type' => 'input', "attributes"=>['readonly'=>'readonly']]
    ];


    public function __construct()
    {
        if (!$this->model)
            $this->model = 'App\Feedback';

        if (!$this->name) {
            $this->name = "feedback";
        }
    }
}
