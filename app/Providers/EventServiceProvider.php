<?php

namespace App\Providers;

use App\Page;
use App\Category;
use App\Product;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\Event' => [
            'App\Listeners\EventListener',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */

    public static function setUrl($model){
        $newUrl = $model->fullUrl();

        if ($model->id && $newUrl != $model->url) {
//                Redirect::firstOrCreate([
//                    'from' => $model->url,
//                    'model' => 'Page',
//                    'model_id' => $model->id
//                ]);
            $model->url = $newUrl;
        }
        //Log::model($model);
    }

    public static function setChildrensUrl($model) {
        if (count($model->childrens))
            foreach ($model->childrens as $children)
                if ($children->url != $children->fullUrl())
                    $children->save();
    }

    public function boot()
    {
        parent::boot();

        Page::saving(function($model)
        {
            EventServiceProvider::setUrl($model);
        });

        Page::saved(function($model)
        {
            EventServiceProvider::setChildrensUrl($model);
        });

        Category::saving(function($model)
        {
            EventServiceProvider::setUrl($model);
        });

        Category::saved(function($model)
        {
            EventServiceProvider::setChildrensUrl($model);
        });

        Product::saving(function($model)
        {
            EventServiceProvider::setUrl($model);
        });
    }
}
