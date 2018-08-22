<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

    Route::group(['middleware' => 'auth', 'prefix' => "admin"], function () {
        Route::get('/', 'Admin\AdminController@index')->name('index');

        Route::resource('user', 'Admin\UserController');
        Route::get( 'user/{id}/delete', 'Admin\UserController@destroy')->name("user.delete");

        Route::resource('page', 'Admin\PageController');
        Route::get( 'page/{id}/child', 'Admin\PageController@child')->name("page.child");
        Route::get( 'page/{id}/delete', 'Admin\PageController@delete')->name("page.delete");

        Route::get('template', 'Admin\TemplateController@index');
        Route::get( 'template/create', 'Admin\TemplateController@create')->name("template.create");
        Route::post('template', 'Admin\TemplateController@store')->name("template.store");
        Route::post('template/create', 'Admin\TemplateController@create'); //todo надо ли?
        Route::get( 'template/{id}/copy',   'Admin\TemplateController@copy')->name("template.copy");
        Route::get( 'template/{id}/child',  'Admin\TemplateController@child')->name("template.child");
        Route::get( 'template/{id}/edit',   'Admin\TemplateController@edit')->name("template.edit");
        Route::put('template/{id}', 'Admin\TemplateController@update')->name("template.update");
        Route::get( 'template/{id}/delete/', 'Admin\TemplateController@delete')->name("template.delete");


//        Route::get( '/',           studly_case($url) . 'Controller@list');
//        Route::get( 'add',         studly_case($url) . 'Controller@form')->name("{$url}.add");
//        Route::post('add',         studly_case($url) . 'Controller@form');
//        Route::get( 'copy/{id}',   studly_case($url) . 'Controller@copy')->name("{$url}.copy");
//        Route::get( 'child/{id}',  studly_case($url) . 'Controller@child')->name("{$url}.child");
//        Route::get( 'edit/{id}',   studly_case($url) . 'Controller@form')->name("{$url}.edit");
//        Route::post('update/{id}', studly_case($url) . 'Controller@form')->name("{$url}.update");
//        Route::get( 'delete/{id}', studly_case($url) . 'Controller@delete')->name("page.delete");

        //Route::get( '{id}/update', 'Admin\PageController@update')->name("page.update");

        //Route::get( '/',           studly_case($url) . 'Controller@list');
        //        Route::get( 'add',         studly_case($url) . 'Controller@form')->name("{$url}.add");
        //        Route::post('add',         studly_case($url) . 'Controller@form');
        //        Route::get( 'copy/{id}',   studly_case($url) . 'Controller@copy')->name("{$url}.copy");
        //        Route::get( 'child/{id}',  studly_case($url) . 'Controller@child')->name("{$url}.child");
        //        Route::get( 'edit/{id}',   studly_case($url) . 'Controller@form')->name("{$url}.edit");
        //        Route::post('update/{id}', studly_case($url) . 'Controller@form')->name("{$url}.update");
        //        Route::get( 'delete/{id}', studly_case($url) . 'Controller@delete')->name("page.delete");
    });


