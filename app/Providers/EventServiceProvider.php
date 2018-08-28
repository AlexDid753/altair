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
        if ($newUrl != $model->url) {
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

    public static function setProductsUrl($model){
        if (count($model->products))
            foreach ($model->products as $product)
                if ($product->url != $product->fullUrl())
                    $product->save();
        if (count($model->childrens))
            foreach ($model->childrens as $children) {
                self::setChildrensUrl($children);
                self::setProductsUrl($children);
            }
    }

    public function boot()
    {
        parent::boot();

        Page::saving(function($model)
        {
            self::setUrl($model);
        });

        Page::saved(function($model)
        {
            self::setChildrensUrl($model);
        });

        Category::saving(function($model)
        {
            self::setUrl($model);
        });

        Category::saved(function($model)
        {
            self::setChildrensUrl($model);
            self::setProductsUrl($model);
        });

        Product::saving(function($model)
        {
            self::setUrl($model);
        });
    }
}
