<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) {
        
        $data = $request->validate([
            'email' => 'string|email|required',
            'password' => 'string|required'
        ]);

        $token = Auth::attempt($data);

        if(!$token) {
            return response()->json([
                'status' => false,
                'message' => "Giriş başarısız, Lütfen bilgilerinizi kontrol edin."
            ], 401);
        }

        return response()->json([
            'status' => true,
            'message' => "Giriş başarılı, Hoş geldiniz.",
            'user' => Auth::user(),
            'token' => $token
        ]);
    }

    public function register(Request $request) {

        $user = new User();
        
        $data = $request->validate([
            'name' => "string|required|min:2",
            'surname' => "string|required|min:2",
            'email' => "string|required|email|unique:users",
            'username' => 'required|unique:users|regex:/^[a-zA-Z0-9_]+$/',
            'password' => "required|min:8",
        ]);

        $user->name = $data["name"];
        $user->surname = $data["surname"];
        $user->email = $data["email"];
        $user->username = $data["username"];
        $user->password = $data["password"];

        $user->save();

        return response()->json([
            'status' => true,
            'message' => "Hesabınız başarıyla oluşturuldu.",
            'user' => $user
        ], 201);

    }

    public function profile() {
        return response()->json(Auth::user(), 200);
    }

}
