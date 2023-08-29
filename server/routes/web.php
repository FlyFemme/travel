<?php
use App\Http\Controllers\FormAddNewCardController;

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CardController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SearchGuestController;


Route::get('/', [CardController::class, 'index'])->name('cards');

Route::get('/dashboard', [FormAddNewCardController::class, 'dashboard'])
    ->middleware(['auth'])
    ->name('dashboard');
    
Route::get('/details/{formAddNewCard}', [FormAddNewCardController::class, 'details'])
    ->middleware(['auth'])
    ->name('details');
    
Route::resource('formAddNewCard', FormAddNewCardController::class)
    ->only(['index', 'store', 'edit', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);
    
Route::get('/search', [SearchController::class, 'search'])->name('search');
Route::get('/searchGuest', [SearchGuestController::class, 'searchGuest'])->name('searchGuest');


    
require __DIR__.'/auth.php';