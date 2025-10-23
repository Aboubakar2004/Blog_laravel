<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;

class PostsController extends Controller
{
    public function store (Request $request) {
        $validate = $request->validate([
            "title" => "required|string|max:225",
            "content" => "required|string|max:550",
        ]);

        $validate["user_id"] = auth()->id();

        $post = Posts::create($validate);

        return response()->json([
            "message" => "Post crée avec succès",
            "post" => $post
        ]);
    }

    public function destroy ($id) {
        $post = Posts::findOrFail($id);
        $post->delete();

        return response()->json([
            "message" => "Post supprimé avec succès",
            "post" => $post
        ]);
    }
}
