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
        return $this->hasMany('App\Category', 'parent_id', 'id')->with('childrens');
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

    /*
     * Возращает наименования кастомных
     * атрибутов в зависимости от принадлежности к категории
     */
    public function customProductFields() :array
    {
        //Атрибуты для категории "Серьги" (id = 14)
        if (array_intersect($this->parentsIds(), [14])) { //Если среди родителей есть категория с id==14 то вот customFields
            return [
                'fastener_type' => [
                    'type' => 'dropdown',
                    'label' => 'Fastener type',
                    'rus_label' => 'Вид застежки',
                    'model' => 'Category',
                    'method' => 'fastener_type_dropdown',
                ]
            ];
        }
        //Атрибуты для категории "Броши" (id = 15)
        if (array_intersect($this->parentsIds(), [15])) {
            return [
                'design' => [
                    'type' => 'dropdown',
                    'label' => 'Design',
                    'rus_label' => 'Дизайн',
                    'model' => 'Category',
                    'method' => 'design_dropdown',
                ]
            ];
        }
        return [];
    }

    public static function fastener_type_dropdown()
    {
        return [
            0 => '',
            1 => 'Пусеты на винтовом замке (или гвоздики)',
            2 => 'Английский замок'
        ];
    }

    public static function design_dropdown()
    {
        return [
            0 => '',
            1 => 'Ажурные',
            2 => 'Животный мир',
            3 => 'Булавки и иглы'
        ];
    }

}
