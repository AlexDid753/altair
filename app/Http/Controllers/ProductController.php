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
        if ($products_recently_viewed_ids == null)
            $products_recently_viewed_ids = [];
        // Push product ID to session
        if (!in_array($model->id,$products_recently_viewed_ids))
            session()->push('products.recently_viewed', $model->id);

        $products_recently_viewed = Product::limit(10)->whereIn('id', $products_recently_viewed_ids)->get();

        return view('product', [
            'model' => $model,
            'products_recently_viewed' => $products_recently_viewed,
            'products_liked' => Product::liked()
        ]);
    }

    /**
     * Находит продукт по slug, добавляет его id в сессию
     * или удаляет если он уже присутствует,
     * и возвращает id лайкнутого товара
     * @param $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function toggle_like($slug)
    {
        $model = Product::where('slug', $slug)->first();

        if (!$model) {
            $returnData = array(
                'status' => 'error',
                'message' => 'Product not found!'
            );
            return response()->json($returnData, 404);
        }

        $model->isLiked() ? $model->remove_from_liked() : $model->add_to_liked();

        return response()->json(['success'=>1,
                                'product_id'=> $model->id,
                                'products_liked' => Product::liked() ]);
    }

    public function get_liked(){
        return response()->json(['products_liked' => Product::liked() ]);
    }
}