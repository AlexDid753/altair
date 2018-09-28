<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;

class UserController extends BaseAdminController
{
    use RegistersUsers;

    public $fields = [
        'name' => ['type' => 'input', 'label' => 'First Name'],
        'email'=> 'email',
        'password'=> 'password',
    ];

    protected function processDataBeforeFill() {
        $this->data = array_where($this->data, function ($value) {
            return !is_null($value);
        });

        if (isset($this->data['password']))
            $this->data['password']  = Hash::make($this->data['password']);
    }

    protected function processEventAfterCreate($model) {
        event(new Registered($model));
    }
}
