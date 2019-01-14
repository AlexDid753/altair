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
}
