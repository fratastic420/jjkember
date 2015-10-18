<?php namespace App\Providers;

use Illuminate\Routing\Router;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider {

	/**
	 * This namespace is applied to the controller routes in your routes file.
	 *
	 * In addition, it is set as the URL generator's root namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'App\Http\Controllers';

	/**
	 * Define your route model bindings, pattern filters, etc.
	 *
	 * @param  \Illuminate\Routing\Router  $router
	 * @return void
	 */
	public function boot(Router $router)
	{
		parent::boot($router);
		//
		////
		$router->model('articles', 'App\Article');
		$router->bind('articles', function($id)
		{
			return \App\Article::findOrFail($id);
		});
		
		$router->model('artworks', 'App\Artwork');
		$router->bind('artworks', function($id)
		{
			return \App\Artwork::findOrFail($id);
		});
		
		$router->model('sites', 'App\Site');
		$router->bind('sites', function($id)
		{
			return \App\Site::findOrFail($id);
		});
		
		$router->model('tags', 'App\Tag');
		$router->bind('tags', function($id)
		{
			return \App\Tag::findOrFail($id);			
		});
		
		$router->model('images', 'App\Image');
		$router->bind('images', function($id){
			return \App\Image::findOrFail($id);
		});
	}
	
	

	/**
	 * Define the routes for the application.
	 *
	 * @param  \Illuminate\Routing\Router  $router
	 * @return void
	 */
	public function map(Router $router)
	{
		$router->group(['namespace' => $this->namespace], function($router)
		{
			require app_path('Http/routes.php');
		});
	}

}
