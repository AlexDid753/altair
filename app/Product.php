<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends ResourcePage
{
    public function categories()
    {
        return $this->belongsToMany('App\Category');
    }

}
