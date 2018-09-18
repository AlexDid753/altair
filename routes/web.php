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
use App\Category;
use App\Product;
use Illuminate\Support\Facades\App;

/**
 * Генерация связей с продуктами
 */
/*
Route::get('/category_product_generate',function(){
    $faker = Faker\Factory::create();

    $limit = 40;

    for ($i = 0; $i < $limit; $i++) {

        DB::table('category_product')->insert([ //,
            'category_id' => $faker->numberBetween($min = 0, $max = 16),
            'product_id' => $faker->numberBetween($min = 47, $max = 96)
        ]);
        echo "Успешно вставлена связь <br>";
    }
    echo "Закоментируйте текущий роут!";
});
*/

Route::middleware(['auth'])->group(function () {
    Route::get('/admin/elfinder', 'Barryvdh\Elfinder\ElfinderController@showPopup')->name('elfinder');
});

Auth::routes();

Route::group(['middleware' => 'auth', 'prefix' => "admin"], function () {
    Route::get('/', 'Admin\AdminController@index')->name('admin.index');
    Route::get('settings', 'Admin\SettingsController@form')->name('settings');
    Route::post('settings', 'Admin\SettingsController@form');

    foreach (['user', 'page', 'template', 'news', 'menu', 'category', 'product', 'feedback'] as $url) {
        Route::prefix($url)->group(function () use ($url) {
            $controller = 'Admin\\' . studly_case($url) . 'Controller';

            Route::get('', $controller . '@index');
            Route::get('/create', $controller . '@create')->name($url . ".create");
            Route::post('', $controller . '@store')->name($url . ".store");
            Route::get('/{id}/copy', $controller . '@copy')->name($url . ".copy");
            Route::get('/{id}/copy', $controller . '@copy')->name($url . ".copy");
            Route::get('/{id}/child', $controller . '@child')->name($url . ".child");
            Route::get('/{id}/edit', $controller . '@edit')->name($url . ".edit");
            Route::put('/{id}', $controller . '@update')->name($url . ".update");
            Route::get('/{id}/delete/', $controller . '@delete')->name($url . ".delete");

        });
    }

});

Route::get('search', ['as' => 'search', 'uses' => 'SearchController@search']);

Route::get('catalog', 'CategoryController@index')->name('catalog');
Route::get('product_like/{slug}', 'ProductController@toggle_like');
Route::post('products_get_liked', 'ProductController@get_liked');

Route::post('feedback', 'FeedbackController@send');

$categories_urls = Category::published()->pluck('url');
foreach ($categories_urls as $url) {
    Route::get($url, 'CategoryController@show');
}

foreach ($categories_urls as $url) {
    Route::get($url . "{url}", 'ProductController@show')->where('url', '[A-Za-z0-9/-]+');
}


Route::get('{url?}', 'PageController@show')->where('url', '[A-Za-z0-9/-]+');

