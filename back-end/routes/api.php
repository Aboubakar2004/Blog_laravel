<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register' , [AuthController::class, "register"]);
Route::post('/login' , [AuthController::class, "login"]);
Route::middleware("auth:sanctum")->post('/logout', [AuthController::class, "logout"]);
Route::middleware("auth:sanctum")->get('/user/name', [UserController::class, "getUserInfo"]);

Route::apiResource('/posts', PostsController::class)->middleware("auth:sanctum");

Route::get('/showAllPosts', [PostsController::class, 'showAllPosts']);

