<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('tags', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->index();
			$table->text('text')->nullable();
			$table->timestamps();
		});
		
		Schema::create('article_tag', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('article_id')->unsigned()->index();
			$table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');
			$table->integer('tag_id')->unsigned()->index();
			$table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
			$table->timestamps();
		});
		
		Schema::create('artwork_tag', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('artwork_id')->unsigned()->index();
			$table->foreign('artwork_id')->references('id')->on('artworks')->onDelete('cascade');
			$table->integer('tag_id')->unsigned()->index();
			$table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
			$table->timestamps();
		});
		
		Schema::create('site_tag', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('site_id')->unsigned()->index();
			$table->foreign('site_id')->references('id')->on('sites')->onDelete('cascade');
			$table->integer('tag_id')->unsigned()->index();
			$table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
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
		Schema::drop('tags');
		Schema::drop('article_tag');
		Schema::drop('artwork_tag');
		Schema::drop('site_tag');
	}

}
