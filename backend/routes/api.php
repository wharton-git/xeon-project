<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('user',UserController::class);
Route::post('post', [UserController::class, 'show']);
Route::post('create', [UserController::class, 'create']);
Route::get('/messages/{userId}', [MessageController::class, 'index1']);
Route::get('/messages', [MessageController::class, 'index']);
