<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use Traits\ResourcePageMethods;

    protected $fillable = [
        'parent_id',
        'published',
        'title',
        'slug',
        'url',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'text'
    ];
    protected $casts = [
        'published' => 'boolean',
    ];

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