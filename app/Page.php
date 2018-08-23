<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use SoftDeletes;

    protected $attributes = [
        'fields' => '{}'
    ];

    protected $fillable = [
        'parent_id', 'template_id', 'published', 'name', 'slug', 'fields'
    ];

    protected $casts = [
        'published' => 'boolean',
        'fields' => 'array'
    ];

    public $logFields = [
        'parent_id', 'template_id', 'published', 'name', 'slug', 'fields'
    ];

    public function getAttribute($key)
    {
        $return = parent::getAttribute($key);

        if ($return === null && isset($this->fields[$key])) {

            $isMultiField = $this->template &&
                isset($this->template->$key) &&
                strpos($this->template->$key, 'multi') === 0 &&
                ($return = json_decode($this->fields[$key])) &&
                json_last_error() === JSON_ERROR_NONE;

            if ($isMultiField)
                $return = collect($return);
            else
                $return = $this->fields[$key];
        }

        return $return;
    }

    public static function validatorRules()
    {
        return [
            'parent_id' => 'nullable|integer|exists:pages,id',
            'template_id' => 'nullable|integer|exists:templates,id',
            'published' => 'boolean',
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255',
            'fields' => 'nullable|array',
        ];
    }

    public function setSlugAttribute($value)
    {
        if ($value != '/')
            $value = str_slug($value) ?: str_slug($this->attributes['name']);

        while (self::where([['id', '<>', $this->id], ['parent_id', '=', $this->parent_id], ['slug', '=', $value]])->count()) {
            if (!preg_match('~^(.+-)(\d+)$~', $value))
                $value = $value . '-1';
            else
                $value = preg_replace_callback('~^(.+-)(\d+)$~', function ($data) {
                    return $data[1] . ($data[2] + 1);
                }, $value);
        }

        $this->attributes['slug'] = $value;
    }

    public function parent()
    {
        return $this->belongsTo('App\Page');
    }

    public function childrens()
    {
        return $this->hasMany('App\Page', 'parent_id', 'id');
    }

    public function template()
    {
        return $this->belongsTo('App\Template');
    }

    public function isContainer()
    {
        return $this->template && $this->template->is_container;
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

    public function firstImage($default = '')
    {
        if (!empty($this->image))
            return $this->image;

        if (!empty($this->images) && $this->images->first()->image)
            return $this->images->first()->image;

        return $default;
    }

    public static function dropdown($not = null, $parentId = null, $parentName = null)
    {
        $in = [1];
        if ($not)
            $in[] = $not;

        if ($parentId)
            $out = [];
        else
            $out = ['' => ''];

        $models = self::where(['parent_id' => $parentId])->get();
        if ($models)
            foreach ($models as $model) {
                $out[$model->id] = $parentName ? $parentName . $model->name : $model->name;
                if (!$model->isContainer() && count($model->childrens))
                    $out += self::dropdown(null, $model->id, $parentName . $model->name . ' > ');
            }

        return $out;
    }

    public static function dropdownMenu()
    {
        $plucked = self::pluck('name', 'id');
        return ['' => ''] + $plucked->all();
    }

    public static function dropdownStones()
    {
        $plucked = self::where(['template_id' => 9])->pluck('name', 'id');
        return $plucked->all();
    }

    public static function dropdownProducts()
    {
        $plucked = self::where(['template_id' => 12])->pluck('name', 'id');
        return $plucked->all();
    }

    public static function dropdownPortfolio()
    {
        $plucked = self::where(['template_id' => 19])->pluck('name', 'id');
        return $plucked->all();
    }

    public static function dropdownCountry()
    {
        $countries = [
            '', 'Болгария', 'Бразилия', 'Вьетнам', 'Германия', 'Греция', 'Египет', 'Индия', 'Иран', 'Испания',
            'Италия', 'Казахстан', 'Канада', 'Китай', 'Мадагаскар', 'Намибия', 'Норвегия', 'Пакистан', 'Португалия',
            'Россия', 'Сирия', 'Турция', 'Украина', 'Финляндия', 'Эстония', 'Саудовская Аравия', 'Оман'
        ];

        asort($countries);

        $out = [];

        foreach ($countries as $country)
            $out[str_slug($country)] = $country;

        return $out;
    }

    public static function countryName($id)
    {
        $array = self::dropdownCountry();
        if (isset($array[$id]))
            return $array[$id];

        return '';
    }

    public static function dropdownColor()
    {
        $colors = [
            '', 'Бежевый', 'Белый', 'Желтый', 'Розовый', 'Красный', 'Черный', 'Коричневый', 'Зеленый',
            'Синий', 'Голубой', 'Серый', 'Фиолетовый', 'Мультиколор'
        ];

        asort($colors);

        $out = [];

        foreach ($colors as $color)
            $out[str_slug($color)] = $color;

        return $out;
    }

    public static function colorName($id)
    {
        $array = self::dropdownColor();
        if (isset($array[$id]))
            return $array[$id];

        return '';
    }

    public static function getUrl($id)
    {
        $model = self::firstOrNew(['id' => $id]);
        return $model->url ?: '#notFound';
    }
}
