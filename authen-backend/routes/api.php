<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('getAccount', [AuthenController::class, 'getAccount']);
Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthenController::class, 'login']);
    Route::post('register', [AuthenController::class, 'register']);

    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::get('logout', [AuthenController::class, 'logout']);
        Route::get('user', [AuthenController::class, 'user']);
    });
});
