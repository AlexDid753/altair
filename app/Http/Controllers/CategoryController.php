<?php

namespace App\Http\Controllers;

use App\ProductsFilter;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Page;
use App\Category;
use App\Product;
use Illuminate\Support\Facades\Input;


class CategoryController extends BaseController
{
    public function get(Request $request, $category_id) {
        $url = prepare_url($request->getRequestUri());
        $model = Category::find($category_id);
        $products = (new ProductsFilter($model->products(), $request))->apply();
        $view = view("blocks.products-grid", ['products' => $products])->render();
        return response()->json(['html'=>$view]);
    }

    public function show(Request $request)
    {
        $url = prepare_url($request->getRequestUri());
        $model = Category::where(['published' => 1, 'url' => $url])->first();
        if (!$model)
            abort(404, 'Страница не найдена');
        $subcategories = $model->childrens->where('published', '=', 1);

        //meta
        if (intval($request['page']) > 1) {
            $meta_title = ($model->meta_title ?? $model->name) . " - страница " . intval($request['page']);
            $meta_decription = ($model->meta_description ?? $model->name) . " - страница " . intval($request['page']);
        } else {
            $meta_title = $model->meta_title ?? $model->name;
            $meta_decription = $model->meta_description ?? $model->name;
        }
        $show_link_canonical = (isset($request['page']));
        //meta_end
        $products = (new ProductsFilter($model->products(), $request))->apply();

        return view('category', [
            'model' => $model,
            'subcategories' => $subcategories,
            'products' => $products->appends(Input::except('page')),
            'meta_title' => $meta_title,
            'meta_description' => $meta_decription,
            'show_link_canonical' => $show_link_canonical
        ]);
    }

    public function index(Request $request)
    {
        //Опубликованные корневые категории
        $models = Category::published()->where('parent_id', '=', null);
        if (!$models)
            abort(404, 'Страница не найдена');

        $model = new Page();
        $model->name = 'Каталог';

        return view('catalog', [
            'model' => $model,
            'models' => $models,
            'sidebarFilter' => false,
            'searchResult' => false,
        ]);
    }

}
