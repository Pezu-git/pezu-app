<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrainingController;
use App\Http\Controllers\TrainingCountController;

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

Route::view('/{path?}', 'app');

Route::post('/training/data', [TrainingController::class, 'index']);

Route::post('/training/add', [TrainingController::class, 'store']);

Route::get('/user/data', [TrainingCountController::class, 'index']);





