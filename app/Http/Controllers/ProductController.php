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

        //Delete current model id from array
        $products_recently_viewed_ids = array_diff( $products_recently_viewed_ids, [$model->id] );
        $products_recently_viewed = Product::limit(10)->whereIn('id', $products_recently_viewed_ids)->get();

        $images = !empty($model->images)? json_decode($model->images) : [];

        //Рекомендуемые товары
        $connected_products_ids = [];
        foreach (!empty($model->connected_products)? explode(',', $model->connected_products) : [] as $id){
            array_push($connected_products_ids, intval(trim($id)));
        }
        $connected_products_ids = array_unique($connected_products_ids);
        $key=array_search($model->id, $connected_products_ids);
        if (false !== $key) unset($connected_products_ids[ $key ]);
        $connected_products = Product::limit(4)->whereIn('id', $connected_products_ids)->get();


        return view('product', [
            'model' => $model,
            'products_recently_viewed' => $products_recently_viewed,
            'products_liked' => Product::liked(),
            'images' => $images,
            'connected_products' => $connected_products
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

    /**
     * Очищает данные о лайкнутых продуктах
     */
    public function remove_liked()
    {
        session()->put('products.liked', []);
        return response()->json(['success'=>1]);
    }
}