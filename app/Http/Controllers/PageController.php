<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Category;
use App\Page;
//use App\Redirect;

class PageController extends BaseController
{
    public function show(Request $request, $url = '/')
    {

        if ($url != '/')
            $url = '/' . $url;

        $model = Page::where(['published' => 1, 'url' => $url])->first();


        if (!$model)
            abort(404, 'Страница не найдена');

        $params = [
            'model' => $model,
            'products_liked' => Product::liked()
        ];

        if ($model->template && $model->template->view)
            return view($model->template->view ?: 'welcome', $params);

        return $model;
    }

}
