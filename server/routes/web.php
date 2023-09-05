<?php
use App\Http\Controllers\FormAddNewCardController;


use App\Http\Controllers\CardController;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;


Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout')->middleware('auth:sanctum');


    
