


Route::get('/usuarios', [UsuarioController::class, 'index']);


Route::group(['middleware' => ['auth']], function() {
    Route::resource('roles', RolController::class);
    Route::resource('usuarios', UsuariosController::class);
    Route::resource('blogs', BlogController::class);
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
