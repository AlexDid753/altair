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
        'message'
    ];

    public function summ()
    {

        if (isset($this->products) && !empty($this->products)) {
            $product_ids = [];
            foreach (json_decode($this->products) as $p){
                array_push($product_ids,$p->id);
            }

            $products = \App\Product::whereIn('id', $product_ids)->get();
            $summ = 0;
            foreach($products as $product){
                $summ += $product->price;
            }
            return $summ;
        }
        return 0;
    }
}
