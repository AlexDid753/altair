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
                return "Полная оплата онлайн";
                break;
            case 1:
                return "Оплата 50%, остальное наличными курьеру";
                break;
            case 2:
                return "Оплата наличными курьеру при получении";
                break;
            default:
                return "";
        }
    }
}
