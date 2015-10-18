<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSitesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sites', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('title')->unique();
			$table->text('text')->nullable();
			$table->json('tags');
			$table->integer('mainimageid')->unsigned();
			$table->string('mainimage');
			$table->text('tech')->nullable();
			$table->string('url');
			$table->json('auximages');
			$table->string('author');
			$table->timestamp('timestamp');
			$table->integer('views')->default(0);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('sites');
	}

}
