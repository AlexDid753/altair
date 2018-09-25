<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAttributesToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('code')->nullable();
            $table->boolean('presence')->default(true);
            $table->string('sample')->nullable();
            $table->string('piece')->nullable();
            $table->float('weight', 8, 2)->nullable();
            $table->string('material')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('code');
            $table->dropColumn('presence');
            $table->dropColumn('sample');
            $table->dropColumn('piece');
            $table->dropColumn('weight');
            $table->dropColumn('material');
        });
    }
}
