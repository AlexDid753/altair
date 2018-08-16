<?php

namespace App\Http\Controllers\Admin;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;



class UserController extends Controller
{
    /**
     * Показать профиль данного пользователя.
     *
     * @param  int  $id
     * @return Response

    public function show($id)
    {
        return view('user.profile', ['user' => User::findOrFail($id)]);
    }
*/
    public function index()
    {
        return view('admin.user.index', ['users' => User::all()]);
    }

    public function edit($id)
    {
        $user = User::find($id);

        return view('admin.user.edit', ['user' => $user]);
    }

    public function update($id)
    {
        $rules = array(
            'name'       => 'required',
            'email'      => 'required|email',
        );
        $validator = Validator::make(Input::all(), $rules);

        if ($validator->fails()) {
            return Redirect::to('users/' . $id . '/edit')
                ->withErrors($validator)
                ->withInput(Input::except('password'));
        } else {
            $user = user::find($id);
            $user->name       = Input::get('name');
            $user->email      = Input::get('email');

            $user->save();

            // redirect
            Session::flash('message', 'Successfully updated user!');
            return Redirect::to('admin/user');
        }
    }



    public function destroy($id)
    {
        $user = user::find($id);
        $user->delete();

        Session::flash('message', 'Successfully deleted user!');
        return Redirect::to('/admin/user');
    }

}
