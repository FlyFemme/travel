<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{

    public function index()
    {
        return view('login');
    }

    // Método de inicio de sesión
    public function login(Request $request)
    {

        $this->validate($request, [
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (!auth()->attempt($request->only('email', 'password'))) {
            return back()->with('mensaje', 'Credenciales incorrectas');
        }

        return redirect()->route('indexUsers')->with('success', '¡Te has conectado correctamente!');
    }

    // Método para cerrar sesión personalizado si es necesario
    public function customLogout()
    {
        auth()->logout();
        return redirect()->route('login');
    }
}
