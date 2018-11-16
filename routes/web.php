<?php

use App\Tweet;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tt', function () {
    return view('tweet');
});

Route::post('/tt', 'TweetController@store');





Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/user/settings', 'userController@profile')->name('user.settings');
Route::post('/user/settings', 'userController@update')->name('user.settings.update');
