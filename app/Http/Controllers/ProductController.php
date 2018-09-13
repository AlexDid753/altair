<?php


namespace App\Http\Controllers;
use App\Product;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class ProductController extends BaseController
{
    public function show(Request $request, $url=null)
    {
        $url = prepare_url($request->getRequestUri());
        $model = Product::where(['published' => 1, 'url' => $url])->first();

        if (!$model)
            abort(404, 'Страница не найдена');

        $products_recently_viewed_ids = session()->get('products.recently_viewed');
        // Push product ID to session
        if (!in_array($model->id,$products_recently_viewed_ids))
            session()->push('products.recently_viewed', $model->id);

        $products_recently_viewed = Product::limit(10)->whereIn('id', $products_recently_viewed_ids)->get();

        return view('product', [
            'model' => $model,
            'products_recently_viewed' => $products_recently_viewed
        ]);
    }
}