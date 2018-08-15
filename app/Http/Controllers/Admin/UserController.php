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
        return view('admin.user', ['users' => User::all()]);
    }

    public function edit($id)
    {
        $user = User::find($id);

        return view('admin.user.edit', ['user' => $user]);

        // show the edit form and pass the user
        //return User::make('user.edit')
            //->with('user', $user);
    }

    public function update($id)
    {
        $rules = array(
            'name'       => 'required',
            'email'      => 'required|email',
        );
        $validator = Validator::make(Input::all(), $rules);

        // process the login
        if ($validator->fails()) {
            return Redirect::to('users/' . $id . '/edit')
                ->withErrors($validator)
                ->withInput(Input::except('password'));
        } else {
            // store
            $user = user::find($id);
            $user->name       = Input::get('name');
            $user->email      = Input::get('email');

            $user->save();

            // redirect
            Session::flash('message', 'Successfully updated user!');
            return Redirect::to('admin/user');
        }
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response

    public function destroy($id)
    {
        // delete
        $user = user::find($id);
        $user->delete();

        // redirect
        Session::flash('message', 'Successfully deleted user!');
        return Redirect::to('/admin/user');
    }
    */
}
