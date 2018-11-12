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
        'text',
        'images'
    ];
    protected $casts = [
        'published' => 'boolean',
    ];

    public function validatorRules($method = 'POST')
    {
        $default_rules = [
            'title' => 'required|string|max:255',
        ];
        return $default_rules;
    }

    public function products()
    {
        return $this->belongsToMany('App\Product');
    }

    public function childrens()
    {
        return $this->hasMany('App\Category', 'parent_id', 'id');
    }

    public function getNameAttribute()
    {
        return $this->attributes['title'];
    }

    public function publishedChildrens(){
        return $this->childrens()->where('published', '=', 1);
    }


    public function isContainer() {
        return false;
    }

    public function fullUrl()
    {
        if (!$this->parent()->exists()) {
            $url = '/'. 'catalog/' . trim($this->slug, '/');
        }else{
            $url = '/' . trim($this->slug, '/');
            $parent = $this->parent;
            $url = $parent->url . $url;
        }

        return $url;
    }

}
