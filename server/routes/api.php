<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CardController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Auth\AuthController;


Route::get('/cards', [CardController::class, 'index']);
Route::get('/card/{id}', [CardController::class, 'show']);
Route::post('/search', [SearchController::class, 'search']);


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {

    Route::controller(CardController::class)->group(function () {
        Route::post('/card', 'store');
        Route::put('/card/{id}', 'update');
        Route::delete('/card/{id}', 'destroy');
    });

    Route::post('/logout', [AuthController::class, 'logout']);
});
