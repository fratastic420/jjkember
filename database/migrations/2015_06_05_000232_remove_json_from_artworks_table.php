<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveJsonFromArtworksTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('artworks', function(Blueprint $table)
		{
			$table->dropColumn('auximages');
			$table->dropColumn('tags');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('artworks', function(Blueprint $table)
		{
			$table->json('tags')->nullable();
			$table->json('auximages')->nullable();
		});
	}

}
