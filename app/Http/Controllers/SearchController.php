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
        $model = new Page;
        $model->name = 'Страница поиска';
        $products_limit = 12; //Количество товаров на странице
        $page_number = 0;
        $models = [];$message = null;
        if (empty($request->all()['q'])){
            $models = Product::paginate($products_limit);
        }
        else{
            if (!empty($request->all()['page'])){$page_number = $request->all()['page'] - 1;} //получаем номер страницы
            $offset = ($products_limit * $page_number); //ставим число, с которого надо начать вывод
            $q = $request->all()['q'];
            $models = Product::searchByQuery([
                'multi_match' => [
                    'query' => $q,
                    'fuzziness' => 'AUTO',
                    'fields' => [ "categories_title^5","title^2", "text"]
                ],
            ], null,
                null,
                $products_limit,
                $offset)->paginate($products_limit);
            if (!count($models)){
                $message = 'Ничего не найдено';
            }
        }
        return view('search', [
            'model' => $model,
            'models'=> $models,
            'message' => $message]);
    }

}
