<?php

namespace App;


class ProductsFilter extends QueryFilter
{
    public function __construct($builder, $request)
    {
        parent::__construct($builder, $request);
        $this->builder = $builder->when(!request('sortByPrice'), function ($q) {
            return $q->orderBy('code');
        })->where('published', 1);
    }

    public function sortByPrice($value = 'asc') {
        return $this->builder->orderBy('price', $value);
    }

    public function minPrice($value = 0) {
        return $this->builder->where('price', '>=', intval($value));
    }

    public function maxPrice($value = 999999) {
        $value = (intval($value) == 0)? 999999 : $value;
        return $this->builder->where('price', '<=', $value);
    }

    public function piece($value = false) {
        $value = ($value === 'true')? true: false;
        return ($value == true)? $this->builder
            ->where('piece', '!=', '')
            ->where('piece', '!=', 'эмаль')
            ->where('piece', '!=', 'Эмаль') : $this->builder;
    }

    public function complect($value = false) {
        $value = ($value === 'true')? true: false;
        return ($value == true)? $this->builder
            ->where('connected_products', '!=', '') : $this->builder;
    }

    public function fastener_type($value = '') {
        return $this->multiCheckBoxAttr(__FUNCTION__, $value);
    }

    public function design($value = '') {
        return $this->multiCheckBoxAttr(__FUNCTION__, $value);
    }

    public function multiCheckBoxAttr($attrName, $value) {
        $value = preg_replace("/[^0-9,]/","",$value);
        if ($value) {
            $vals = explode(",", $value);
            return $this->builder
                ->whereIn($attrName, $vals);
        }
        return $this->builder;
    }
}
