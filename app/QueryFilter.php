<?php

namespace App;


abstract class QueryFilter
{
    protected $builder;
    protected $request;

    public function __construct($builder, $request)
    {
        $this->builder = $builder;
        $this->request = $request;
    }

    public function apply()
    {
        foreach ($this->filters() as $filter => $value) {
            if (method_exists($this, $filter)) {
                $this->$filter($value);
            }
        }
        return $this->builder->paginate($this->count());
    }

    public function filters()
    {
        return $this->request->all();
    }

    public function count() {
        $count  = intval($this->request->count);
        return ($count == 0)? 12 : $count;
    }
}
