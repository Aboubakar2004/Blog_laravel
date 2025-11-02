<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function register (Request $request) {
        $validate = $request->validate([
            "name" => "required|string",
            "email" => "required|string|email|unique:users,email",
            "password" => "required|string|min:6",
        ]);

        $validate["password"] = Hash::make($validate["password"]);
        $user = User::create($validate);
        $token = $user->createToken("auth_token")->plainTextToken;

        return response()->json([
            "message" => "Utilisateur crée avec succès",
            "user" => $user,
            "token" => $token
        ]);
    }

    public function login(Request $request) {
        $request->validate([
            "email" => "required|email",
            "password" => "required",
        ]);

        $user = User::where('email' , $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                "message" => "Email ou mots de passe incorrect"
            ]);
        }

        $token = $user->createToken("auth_token")->plainTextToken;
        return response()->json([
            "message" => "Utilisateur connecté",
            "token" => $token,
            "user" => $user,
            "user_id" => $user->id
        ]);
    }

    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            "message" => "Utilisateur déconnecté avec succès",
        ]);
    }
}
