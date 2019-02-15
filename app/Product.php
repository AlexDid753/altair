<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Elasticquent\ElasticquentTrait;

class Product extends Model
{
    use ElasticquentTrait;
    use Traits\ResourcePageMethods;

    public function validatorRules($method = 'POST')
    {
        $default_rules = [
            'title' => 'required|string|max:255',
            'parent_id' => 'required',
            'price' => 'required|between:0,999999',
            'old_price' => 'between:0,999999',
            'slug' => 'unique:products'
        ];
        $update_rules = [
            'title' => 'required|string|max:255',
            'parent_id' => 'required',
            'price' => 'required|between:0,999999',
            'old_price' => 'between:0,999999',
            'slug' => 'unique:products,slug,' . $this->id
        ];
        switch ($method) {
            case 'GET':
            case 'DELETE':
                {
                    return [];
                }
            case 'POST':
                {
                    return $default_rules;
                }
            case 'PUT':
            case 'PATCH':
                {
                    return $update_rules;
                }
            default:
                return $default_rules;
        }
    }

    protected $maps = [
        'category' => 'categories.title'
    ];

    protected $mappingProperties = array(
        'title' => [
            'type' => 'text',
            "language" => "russian",
            "stopwords" => "_russian_"

        ],
        'text' => [
            'type' => 'text',
            "language" => "russian",
            "stopwords" => "_russian_"
        ],
        'categories_title' => [
            "language" => "russian",
            "stopwords" => "_russian_"
        ],
        'code' => [
            'type' => 'text'
        ],
    );

    protected $fillable = [
        'parent_id',
        'published',
        'title',
        'slug',
        'price',
        'old_price',
        'categories_title',
        'link',
        'link_text',
        'code',
        'presence',
        'sample',
        'piece',
        'weight',
        'material',
        'connected_products',
        'url',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'text',
        'video',
        'images',
        'fastener_type',
        'design',
        'excepted_sizes',
        'categories_title'
    ];

    protected $casts = [
        'published' => 'boolean',
        'categories_title' => 'array',
        'excepted_sizes' => 'array'
    ];

    public function customFields()
    {
        return $this->parent->customProductFields();
    }

    public function categories()
    {
        return $this->belongsToMany('App\Category');
    }

    /*
    public function parentsCount(){
        $count = 0;
        if (($parent = $this->parent())){
            $count+=1;

        }
        if ($parent->parent)
            while ($parent && ($parent->parent)) {
                $count+=1;
            }
        return $count;
    }

    */
    public function fullUrl()
    {
        $url = '/' . trim($this->slug, '/');
        $parent = $this->parent;
        if ($parent) {
            $url = $parent->url . $url;
        } else {
            $url = '/' . 'catalog/' . trim($this->slug, '/');
        }

        return $url;
    }

    public function getNameAttribute()
    {
        return $this->attributes['title'];
    }

    public function fastener_type()
    {
        return Category::fastener_type_dropdown()[intval($this->attributes['fastener_type'])];
    }

    public function design()
    {
        return Category::design_dropdown()[intval($this->attributes['design'])];
    }

    public function prepared_price()
    {
        return $this->prepare_price($this->price);
    }

    public function prepared_old_price()
    {
        return $this->prepare_price($this->old_price);
    }

    public function prepare_price($value)
    {
        if (empty($value))
            return;
        return intval($value) . ' <span class="rub">Р</span>';
    }

    public function isLiked()
    {
        $products_liked = session()->get('products.liked');
        if (empty($products_liked))
            return false;
        return in_array($this->id, $products_liked);
    }

    public function add_to_liked()
    {
        session()->push('products.liked', $this->id);
    }

    public function remove_from_liked()
    {
        $products_liked = session()->get('products.liked');
        $key = array_search($this->id, $products_liked);
        unset($products_liked[$key]);
        session()->forget('products.liked');
        session()->put('products.liked', $products_liked);
    }

    public static function liked()
    {
        $products_liked = session()->get('products.liked');
        if ($products_liked != null)
            return Product::whereIn('id', $products_liked)->get();
        else
            return [];
    }

    public function set_categories_title()
    {
        $categories_title = [];
        foreach ($this->categories as $category) {
            array_push($categories_title, $category->title);
        }
        $this->categories_title = $categories_title;
    }

    public function set_default_category()
    {
        $this->data = request()->all();
        if (array_key_exists('parent_id', $this->data)) {
            $this->categories()->syncWithoutDetaching(intval($this->data['parent_id']));
        }
    }

    public function searchable()
    {
        return ($this->published && !$this->trashed())? true : false;
    }

    //Синхронизация связей с категориями
    public function sync_categories()
    {
        $this->data = request()->all();
        if (array_key_exists('categories', $this->data)) {
            $this->categories()->sync($this->data['categories']);
        }
    }

    public function isRing()
    {
        $ring_categories_ids = [13,19,29];
        return (array_intersect($this->parentsIds(), $ring_categories_ids)) ? true : false;
    }

    public static function excepted_sizes_dropdown()
    {
        return range(14,23, 0.5);;
    }

}
