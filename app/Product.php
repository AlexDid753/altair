<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Elasticquent\ElasticquentTrait;

class Product extends Model
{
    use ElasticquentTrait;
    use Traits\ResourcePageMethods;

    public static function validatorRules()
    {
        return [
            'title' => 'required|string|max:255',
            'parent_id' => 'required',
            'price' => 'required|between:0,999999',
            'old_price' => 'between:0,999999'
        ];
    }

    protected $maps = [
        'category' => 'categories.title'
    ];

    protected $mappingProperties = array(
        'title' => [
            'type' => 'text',
            "analyzer" => "standard",
        ],
        'text' => [
            'type' => 'text',
            "analyzer" => "standard",
        ],
        'categories_title' => [
            'type' => 'text',
            "analyzer" => "standard",
        ],
    );

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
        'images',
        'categories_title'
    ];

    protected $casts = [
        'published' => 'boolean',
        'categories_title' => 'array'
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
        if ($parent) {
            $url = $parent->url . $url;
        } else {
            $url = '/' . 'catalog/' . trim($this->slug, '/');
        }

        return $url;
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
        if (strpos($value, ".") !== false) {
            return $value . '&#8381;';
        }
        return $value . '.00&#8381;';
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

    public function get_images_array($default_src = 'images/photos/jewelry/dark-light-jewelry-01.jpg')
    {
        $images_sources = [$default_src];
        if ( !empty($this->images) ) {
            $images = json_decode($this->images);
            $images_sources = array();
            foreach ($images as $image) {
                array_push($images_sources, $image->image);
            }
        }
        return $images_sources;
    }
    public function preview_image()
    {
        return $this->get_images_array()[0];
    }



}
