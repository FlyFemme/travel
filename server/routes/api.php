<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewCardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UsuarioController;
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


Route::get('/', function () {
    return view('home');
});



Auth::routes();


//y creamos un grupo de rutas protegidas para los controladores
Route::group(['middleware' => ['auth']], function() {
    Route::resource('roles', RolController::class);
    Route::resource('usuarios', UsuarioController::class);

});


