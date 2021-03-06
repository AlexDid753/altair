<?php

namespace App\Providers;

use App\Menu;
use App\Settings;
use Illuminate\Support\Facades\Mail;
use App\Feedback;
use App\Page;
use App\Category;
use App\Product;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Log;

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

    public static function setUrl($model)
    {
        $newUrl = $model->fullUrl();
        if ($newUrl != $model->url) {
            $model->url = $newUrl;
        }
        //Log::model($model);
    }

    public static function setChildrensUrl($model)
    {
        if (count($model->childrens))
            foreach ($model->childrens as $children)
                if ($children->url != $children->fullUrl())
                    $children->save();
    }

    public static function setProductsUrl($model)
    {
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

    public static function sendMail($model)
    {
        $data = array('model'=>$model);
        try {
            Mail::send('emails.admin_mail', $data, function($message) use ($model) {
                $settings = new Settings;
                $subject = 'Новый заказ №'. $model->id .' со страницы Корзина';
                $message->to($settings->admin_email)
                    ->subject($subject);
                $message->from(config('mail.username'),'Altair');
            });
        } catch (\Exception $e) {
            Log::error($e);
        }

        try {
            Mail::send('emails.customer_mail', $data, function($message) use ($model) {
                $subject = 'Формирование заказа №'. $model->id .' на сайте Альтаир';
                $message->to($model->email)
                    ->subject($subject);
                $message->from(config('mail.username'),'Altair');
            });
        } catch (\Exception $e) {
            Log::error($e);
        }
    }

    public function boot()
    {
        parent::boot();

        Page::saving(function ($model) {
            self::setUrl($model);
        });

        Page::saved(function ($model) {
            self::setChildrensUrl($model);
        });

        Category::saving(function ($model) {
            self::setUrl($model);
            self::setChildrensUrl($model);
        });

        Category::updating(function ($model) {
            $original = $model->getOriginal();
            if (($model->slug != $original['slug']) || $model->title != $original['title']) {
                ini_set('max_execution_time', 180); //3 minutes
                foreach ($model->products as $product)
                    $product->save(); //Чтобы вызвать колбеки сохранения продукта
            }
        });

        Product::created(function($model){
            $model->addToIndex();
        });

        Product::saving(function ($model) {
            $model->set_categories_title();
            self::setUrl($model);
        });

        Product::saved(function ($model) {
            $model->sync_categories();
            $model->set_default_category();
            $model->reindex();
        });

        Product::deleted(function($model){
            $model->removeFromIndex();
        });

        Menu::saving(function($model){
            $model->url = $model->getUrl();
        });

        Feedback::saved(function ($model) {
            if($model->type == 'favorites'){
                self::sendMail($model);
            }
        });
    }
}
