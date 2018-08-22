<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    protected $attributes = [
        'fields' => '[
            {"name":"text","type":"editor"},
            {"name":"meta_title","type":"input"},
            {"name":"meta_description","type":"input"},
            {"name":"meta_keywords","type":"input"}
         ]'
    ];

    protected $fillable = [
        'name', 'view', 'is_container', 'fields'
    ];

    public static function validatorRules()
    {
        return [
            'name' => 'required|string|max:255',
            'view' => 'required|string|max:255',
            'fields' => 'string'
        ];
    }

    public function getAttribute($key)
    {
        $return = parent::getAttribute($key);

        if ($return === null) {

            foreach (json_decode($this->fields) as $field) {
                if (isset($field->name) && $field->name == $key)
                    $return = $field->type;
            }
        }

        return $return;
    }

    public static function dropdown()
    {
        $plucked = self::pluck('name', 'id');
        return ['' => ''] + $plucked->all();
    }
}
