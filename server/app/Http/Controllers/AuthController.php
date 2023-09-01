<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function register(Request $request)
    {
    
        $validatedData = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        Auth::login($user);

        $token = $user->createToken('API_TOKEN')->plainTextToken;

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
 
        if (!Auth::attempt($validatedData)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

 
        $user = Auth::user();

        $token = $user->createToken('API_TOKEN')->plainTextToken;
        return response()->json([
            'status' => true,
            'message' => 'User logged in successfully',
            'token' => $token,
        ]);
    }
}
