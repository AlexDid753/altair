<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Validation\Rule;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    public $fields;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function validatorRules($data)
    {
        return [
            'name' => 'required|string|max:255',
            'password' => $this->id && empty($data['password']) ? 'nullable' : 'required|string|min:6',
            'email' => [
                'required', 'string', 'email', 'max:255',
                Rule::unique('users')->ignore($this->id)
            ],
        ];
    }
}
