<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CardController;
use App\Http\Controllers\Auth\AuthController;

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


Route::get('/cards', [CardController::class, 'index']);
Route::get('/card/{id}', [CardController::class, 'show']);

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {

    Route::controller(CardController::class)->group(function () {
        Route::post('/card', 'store');
        // Route::get('/card/{id}', 'show');
        Route::put('/card/{id}', 'update');
        Route::delete('/card/{id}', 'destroy');
    });

    Route::post('logout', [AuthController::class, 'logout']);
});
