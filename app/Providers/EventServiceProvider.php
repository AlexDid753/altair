<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\Page;

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
    public function boot()
    {
        parent::boot();

        Page::saving(function($model)
        {

            $newUrl = $model->fullUrl();

            if ($model->id && $newUrl != $model->url) {
//                Redirect::firstOrCreate([
//                    'from' => $model->url,
//                    'model' => 'Page',
//                    'model_id' => $model->id
//                ]);
                $model->url = $newUrl;
            }
            //dd($model);
            //Log::model($model);

        });

        Page::saved(function($model)
        {
            if (count($model->childrens))
                foreach ($model->childrens as $children)
                    if ($children->url != $children->fullUrl())
                        $children->save();
        });
    }
}
