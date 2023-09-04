<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewCardController;
use App\Http\Controllers\Api\AuthController;


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

Route::prefix('api')->group(function () {
    Route::get('/cards', [NewCardController::class, 'index']);
    Route::post('/card', [NewCardController::class, 'store']);
    Route::get('/card/{id}', [NewCardController::class, 'show']);
    Route::put('/card/{id}', [NewCardController::class, 'update']);
    Route::delete('/card/{id}', [NewCardController::class, 'destroy']);
 
    Route::get('/login', [AuthController::class, 'login']);
    Route::get('/register', [RegisterController::class, 'register'])->name('register');

    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');


});



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
