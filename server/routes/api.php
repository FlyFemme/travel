<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewCardController;
use App\Http\Controllers\Api\AuthController;


Route::controller(NewCardController::class)->group(function () {
    Route::get('/cards', 'index');
    Route::post('/card', 'store');
    Route::get('/card/{id}', 'show');
    Route::put('/card/{id}', 'update');
    Route::delete('/card/{id}', 'destroy');
});

Route::get('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
