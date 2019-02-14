<?php

namespace App\Http\Controllers;

use App\Page;
use App\Product;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class SearchController extends BaseController
{
    public function search(Request $request)
    {
        $admin_search = (strpos($request->path(), 'admin') !== false);
        $page_number = 0;
        $message = null;
        if ($admin_search) {
            $products_limit = 50; //Количество товаров на странице
        } else {
            $products_limit = 12;
            $model = new Page;
            $model->name = 'Страница поиска';
        }
        if (empty($request->all()['q'])) {
            $models = Product::orderBy('id');
        } else {
            if (!empty($request->all()['page'])) {
                $page_number = $request->all()['page'] - 1;
            } //получаем номер страницы
            $offset = ($products_limit * $page_number); //ставим число, с которого надо начать вывод
            $q = $request->all()['q'];
            $models = Product::searchByQuery([
                'multi_match' => [
                    'query' => $q,
                    'prefix_length' => '6',
                    'fuzziness' => 'AUTO',
                    'fields' => ["categories_title^5", "code^3", "title^2"]
                ],
            ], null,
                null,
                $products_limit,
                $offset, 'id');
            if (!count($models)) {
                $message = 'Ничего не найдено';
            }
        }

        if ($admin_search) {
            return view('admin.product.index', [
                'models' => $models->paginate($products_limit),
                'message' => $message,
                'name' => 'product']);
        } else {
            return view('search', [
                'model' => $model,
                'models' => $models->paginate($products_limit),
                'message' => $message]);
        }

    }

}
