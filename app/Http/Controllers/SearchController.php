<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class SearchController extends BaseController
{
    public function search(Request $request)
    {
        $models = [];$message = null;
        if (empty($request->all()['q'])){
            $message = 'Пустой поисковой запрос. Ничего не найдено.';
        }
        else{
            $q = $request->all()['q'];
            $models = Product::searchByQuery([
                'multi_match' => [
                    'query' => $q,
                    'fuzziness' => 'AUTO',
                    'fields' => [ "categories_title^5","title^2", "text"]
                ],
            ]);
            if (!count($models)){
                $message = 'Ничего не найдено';
            }
        }
        return view('search', ['models'=> $models, 'message' => $message]);
    }

}
