<?php

namespace App;


class ProductsFilter extends QueryFilter
{
    public function published()
    {
        return $this->builder->where('published', '=', 1);
    }

    public function sortByPrice($value = 'asc') {
        return $this->published()->orderBy('price', $value);
    }

    public function minPrice($value = 0) {
        return $this->published()->where('price', '>=', intval($value));
    }

    public function maxPrice($value = 999999) {
        $value = (intval($value) == 0)? 999999 : $value;
        return $this->published()->where('price', '<=', $value);
    }

    public function piece($value = false) {
        $value = ($value === 'true')? true: false;
        return ($value == true)? $this->published()
            ->where('piece', '!=', '')
            ->where('piece', '!=', 'эмаль')
            ->where('piece', '!=', 'Эмаль') : $this->published();
    }

    public function complect($value = false) {
        $value = ($value === 'true')? true: false;
        return ($value == true)? $this->published()
            ->where('connected_products', '!=', '') : $this->published();
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
            return $this->published()
                ->whereIn($attrName, $vals);
        }
        return $this->published();
    }
}
