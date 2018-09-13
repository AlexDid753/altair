<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Category;
use App\Page;
//use App\Redirect;

class PageController extends BaseController
{
    public function show(Request $request, $url = '/')
    {

        if ($url != '/')
            $url = '/' . $url;

        $model = Page::where(['published' => 1, 'url' => $url])->first();


//        if (!$model && ($redirect = Redirect::getRedirect($url))) {
//            return redirect($redirect[0], $redirect[1]);
//        }

        if (!$model)
            abort(404, 'Страница не найдена');

        $params = [
            'model' => $model,
            'sidebarFilter' => false,
            'searchResult' => false
        ];

        // main page
        if ($model->id == 1) {
            $parents = Page::where(['template_id' => 12])->pluck('id');
            $portfolio = Page::where('template_id', 11)->limit(10)->inRandomOrder()->get();
            $params['portfolio'] = $portfolio;

            $latestNews = Page::where(['template_id' => 4])->limit(3)->orderBy('created_at', 'desc')->get();
            $params['latestNews'] = $latestNews;
        }

        // news
        if ($model->id == 8) {
            $models = Page::where(['parent_id' => $model->id])->orderBy('created_at', 'desc')->paginate(6);
            $params['models'] = $models;
        }

        // news item
        if ($model->template_id == 4) {
            $prev = Page::where([['created_at', '<', $model->created_at], ['template_id', '=', 4]])
                ->orderBy('created_at', 'desc')
                ->first();
            $next = Page::where([['created_at', '>', $model->created_at], ['template_id', '=', 4]])
                ->orderBy('created_at', 'asc')
                ->first();
            $params['prev'] = $prev;
            $params['next'] = $next;
        }

        if ($model->template && $model->template->view)
            return view($model->template->view ?: 'welcome', $params);

        return $model;
    }

}
