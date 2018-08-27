<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends ResourcePage
{
    public function categories()
    {
        return $this->belongsToMany('App\Category');
    }

    public function parent()
    {
        return $this->belongsTo('App\Category');
    }

    public function childrens()
    {

    }


}
