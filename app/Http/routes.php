<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

//Route::get('home', 'WelcomeController@index');

Route::resource('api/articles', 'ArticlesController');
Route::resource('api/artworks', 'ArtworksController');
Route::resource('api/sites', 'SitesController');
Route::resource('api/tags', 'TagsController');
Route::resource('api/images', 'ImagesController');

Route::post('api/upload', 'UploadsController@upload');
Route::post('api/uploads','UploadsController@update');
Route::get('api/upload', 'UploadsController@index');

Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::post('auth/verify', 'Auth\AuthController@postVerify');

Route::post('api/updatecount', 'CountController@update');


/*
 * *only need the auth controller
 *
 *
 */

Route::controllers([
	'auth' => 'Auth\AuthController',
	//'password' => 'Auth\PasswordController',
]);
