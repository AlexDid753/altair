<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Page;
use App\Category;
use App\Product;


class CategoryController extends BaseController
{
    public function show(Request $request)
    {
        $url = $request->getRequestUri();
        $model = Category::where(['published' => 1, 'url' => $url])->first();
        $subcategories = $model->childrens->where('published' , '=', 1);
        $products = $model->products->where('published' , '=', 1);
        if (!$model)
            abort(404, 'Страница не найдена');

        return view('category', [
            'model' => $model,
            'subcategories' => $subcategories,
            'products' => $products
        ]);
    }

    public function index(Request $request) {
        //Опубликованные корневые категории
        $models = Category::published()->where('parent_id', '=', null);
        if (!$models)
            abort(404, 'Страница не найдена');

        return view('catalog', [
            'models' => $models,
            'sidebarFilter' => false,
            'searchResult' => false
        ]);
    }

}
