<?php

use App\Http\Controllers\FormAddNewCardController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SearchGuestController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\NewCardController;

Route::get('/home', [CardController::class, 'index'])->name('cards');
Route::get('/searchGuest', [SearchGuestController::class, 'searchGuest'])->name('searchGuest');

Route::middleware('auth:sanctum')->group(function () {
    
    Route::get('/search', [SearchController::class, 'search'])->name('search');
    Route::resource('formAddNewCard', FormAddNewCardController::class)
        ->only(['index', 'store', 'edit', 'update', 'destroy'])
        ->middleware(['auth', 'verified']);
    Route::get('/dashboard', [FormAddNewCardController::class, 'dashboard'])
        ->middleware(['auth'])
        ->name('dashboard');
    Route::get('/details/{formAddNewCard}', [FormAddNewCardController::class, 'details'])
        ->middleware(['auth'])
        ->name('details');
});
