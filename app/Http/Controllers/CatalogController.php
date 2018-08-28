<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Page;
use App\Category;
use App\Product;


class CatalogController extends BaseController
{
    public function show(Request $request)
    {


    }

    public function index(Request $request) {
        $models = Category::published();
        dd($models);
        if (!$models)
            abort(404, 'Страница не найдена');
        $params = [
            'models' => $models,
            'sidebarFilter' => false,
            'searchResult' => false
        ];

        return view('catalog', $params);
    }
}
