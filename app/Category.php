<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends ResourcePage
{

    public function products()
    {
        return $this->belongsToMany('App\Product');
    }

    public function childrens()
    {
        return $this->hasMany('App\Category', 'parent_id', 'id');
    }

    public function parent()
    {
        return $this->belongsTo('App\Category');
    }

    public function isContainer() {
        return false;
    }




















}
