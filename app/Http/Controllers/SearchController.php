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
        ($request->path() == 'admin/search') ? $admin_search = true : $admin_search = false;
        if ($admin_search) {
            $products_limit = 50; //Количество товаров на странице
        } else {
            $products_limit = 12;
            $model = new Page;
            $model->name = 'Страница поиска';
        }
        $page_number = 0;
        $message = null;
        if (empty($request->all()['q'])) {
            $models = Product::where('published', 1)->orderBy('id');
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
            //Фильтруем удаленные и неопубликованные и добавляем пагинацию
            if(class_basename($models) == "Builder") {
                $models = $models->paginate($products_limit);
            }else {
                $models = $models->filter(function ($model) {
                    return $model->searchable();
                })->paginate($products_limit);
            }

            return view('search', [
                'model' => $model,
                'models' => $models,
                'message' => $message]);
        }

    }

}
