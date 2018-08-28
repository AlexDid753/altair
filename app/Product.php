<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
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


    public function categories()
    {
        return $this->belongsToMany('App\Category');
    }

    public function parent()
    {
        return $this->belongsTo('App\Category');
    }

    public function fullUrl()
    {
        $url = '/' . trim($this->slug, '/');
        $parent = $this->parent;
        if ($parent){
            $url = $parent->url . $url;
        }else {
            $url = '/'. 'catalog/' . trim($this->slug, '/');
        }

        return $url;
    }


}
