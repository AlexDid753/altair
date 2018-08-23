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


        foreach (['user', 'page','template', 'news'] as $url) {
            Route::prefix($url)->group(function () use ($url) {
                $controller = 'Admin\\'.studly_case($url) . 'Controller';

                Route::get( '',               $controller.'@index');
                Route::get( '/create',        $controller.'@create')->name($url.".create");
                Route::post('',               $controller.'@store')->name($url.".store");
                Route::get( '/{id}/copy',     $controller.'@copy')->name($url.".copy");
                Route::get( '/{id}/copy',     $controller.'@copy')->name($url.".copy");
                Route::get( '/{id}/child',    $controller.'@child')->name($url.".child");
                Route::get( '/{id}/edit',     $controller.'@edit')->name($url.".edit");
                Route::put( '/{id}',          $controller.'@update')->name($url.".update");
                Route::get( '/{id}/delete/',  $controller.'@delete')->name($url.".delete");

            });
        }


    });


