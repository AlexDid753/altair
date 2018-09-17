<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SlugUpdate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->unique('slug');
            $table->index('slug');
        });

        Schema::table('products', function (Blueprint $table) {
            $table->unique('slug');
            $table->index('slug');
        });

        Schema::table('categories', function (Blueprint $table) {
            $table->unique('slug');
            $table->index('slug');
        });
    }


}
