<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'title' => $faker->catchPhrase,
        'text' => $faker->text,
        'slug' => $faker->slug,
        'published' => '1',
        'parent_id' => $faker->numberBetween($min = 0, $max = 16)
    ];
});
