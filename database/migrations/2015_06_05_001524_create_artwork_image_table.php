<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArtworkImageTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		
		Schema::create('article_image', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('article_id')->unsigned()->index();
			$table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');
			$table->integer('image_id')->unsigned()->index();
			$table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
			$table->timestamps();
		});
		
		Schema::create('artwork_image', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('artwork_id')->unsigned()->index();
			$table->foreign('artwork_id')->references('id')->on('artworks')->onDelete('cascade');
			$table->integer('image_id')->unsigned()->index();
			$table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
			$table->timestamps();
		});
		
		Schema::create('site_image', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('site_id')->unsigned()->index();
			$table->foreign('site_id')->references('id')->on('sites')->onDelete('cascade');
			$table->integer('image_id')->unsigned()->index();
			$table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
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
		Schema::drop('article_image');
		Schema::drop('artwork_image');
		Schema::drop('site_image');
	}

}
