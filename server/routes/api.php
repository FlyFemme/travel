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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/usuarios', [UsuarioController::class, 'index']);

Route::group(['middleware' => ['auth']], function() {
    Route::resource('roles', RolController::class);
    Route::resource('usuarios', UsuariosController::class);
    Route::resource('blogs', BlogController::class);
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');