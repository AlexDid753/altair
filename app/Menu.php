<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menu';

    protected $fillable = [
        'name', 'published', 'parent_id', 'sort', 'page_id', 'url', 'page_type'
    ];

    public function validatorRules($method = 'POST')
    {
        $default_rules = [
            'name' => 'required|string|max:255'
        ];
        return $default_rules;
    }

    public function childrens()
    {
        return $this->hasMany('App\Menu', 'parent_id', 'id')
            ->with('childrens')
            ->orderBy('sort');
    }

    public function getUrl()
    {
        if(!empty($this->url))
        {
            return $this->url;
        }

        if ($this->page_id){
            if ($this->page_type == 'pages') {
                return Page::getUrl($this->page_id);
            } else {
                return Category::getUrl($this->page_id);
            }
        }
        return $this->url;
    }

    public function fullUrl()
    {
        $url = '/' . trim($this->slug, '/');
        $parent = $this->parent;
        while ($parent) {
            $url = '/' . $parent->slug . $url;
            $parent = $parent->parent;
        }

        return $url;
    }

    public static function dropdown()
    {
        $plucked = self::pluck('name', 'id');
        return ['' => ''] + $plucked->all();
    }

    public function setSortAttribute($value)
    {
        $this->attributes['sort'] = (int)$value;
    }

    public function scopeSortAsc($query)
    {
        if ($this->orderBy)
            return $query->orderBy('sort', 'asc');

        return $query;
    }
}
