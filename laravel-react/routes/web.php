<?php

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

Route::post('/insert','CRUDcontroller@insertData');

Route::get('/view','CRUDcontroller@viewAll');

Route::post('/delete','CRUDcontroller@deleteByID');

Route::post('/update','CRUDcontroller@updateData');

Route::post('/getbyID','CRUDcontroller@getUserByID');


