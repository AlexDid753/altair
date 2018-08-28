<?php


namespace App\Http\Controllers;
use App\Product;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class ProductController extends BaseController
{
    public function show(Request $request, $url=null)
    {
        $url = $request->getRequestUri();
        $model = Product::where(['published' => 1, 'url' => $url])->first();

        if (!$model)
            abort(404, 'Страница не найдена');

        return view('product', [
            'model' => $model
        ]);
    }
}