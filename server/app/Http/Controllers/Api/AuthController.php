<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{   
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'required|string|email|max:20|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        $token = $user->createToken('API_TOKEN')->plainTextToken;
        Auth::login($user);

        return response()->json([
            'status' => true,
            'message' => 'User created successfully',
            'token' => $token,
        ], 201);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt($validatedData)) {
            $user = Auth::user();
            $token = $user->createToken('API_TOKEN')->plainTextToken;
            return response()->json([
                'status' => true,
                'message' => 'User logged in successfully',
                'token' => $token,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Invalid credentials',
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'status' => true,
            'message' => 'User logged out successfully',
        ]);
 
        $user = Auth::user();

        $token = $user->createToken('API_TOKEN')->plainTextToken;
        return response()->json([
            'status' => true,
            'message' => 'User logged in successfully',
            'token' => $token,
        ]);
    }

    public function allusers(Request $request)
    {
        $user = Auth::user();
        $token = $user->createToken('API_TOKEN')->plainTextToken;
        return response()->json([
            'status' => true,
            'message' => 'User logged in successfully',
            'token' => $token,
        ]);
}
}