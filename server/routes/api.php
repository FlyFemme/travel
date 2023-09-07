<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewCardController;
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

Route::controller(NewCardController::class)->group(function () {
    Route::get('/cards', 'index');
    Route::post('/card', 'store');
    Route::get('/card/{id}', 'show');
    Route::put('/card/{id}', 'update');
    Route::delete('/card/{id}', 'destroy');
});

//
Route::controller(AuthController::class)->group(function () {
    Route::get('/register', 'register');
    Route::post('/login', 'login');
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});
//

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
