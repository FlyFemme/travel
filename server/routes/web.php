<?php

use App\Http\Controllers\FormAddNewCardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CardController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SearchGuestController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UsuariosController;
use App\Http\Controllers\BlogController;

Route::get('/', function () {
    return view('home');
});


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
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::group(['middleware' => ['auth']], function() {
    Route::resource('roles', RolController::class);
    Route::resource('usuarios', UsuariosController::class);
    Route::resource('blogs', BlogController::class);
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
