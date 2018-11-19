<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{

    protected $table = 'feedbacks';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'products',
        'message',
        'privacy-policy'
    ];

    public function summ()
    {
        if (isset($this->products) && !empty($this->products)) {
            $product_ids = [];
            foreach (json_decode($this->products) as $p) {
                array_push($product_ids, $p->id);
            }

            $products = \App\Product::whereIn('id', $product_ids)->get();
            $summ = 0;
            foreach ($products as $product) {
                $summ += $product->price;
            }
            return $summ;
        }
        return 0;
    }

    public function getPayTypeAttribute($value)
    {
        switch (intval($value)) {
            case 0:
                return "Банковской картой на сайте онлайн";
                break;
            case 1:
                return "Банковской картой на сайте онлайн (предоплата 50%)";
                break;
            case 2:
                return "Наличными при получении";
                break;
            default:
                return "";
        }
    }

    public function type_word()
    {
        switch ($this->type) {
            case 'contacts':
                return "Обратная связь со страницы 'Контакты'";
                break;
            case 'subscribe':
                return "Подписка на новости в футере";
                break;
            case 'favorites':
                return "Заказ";
                break;
            default:
                return "Неизвестно";
        }
    }
}
