<?php

namespace App\Http\Controllers\Api;

use App\Models\Card;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function index()
    {
        $cards = Card::all();
        return $cards;
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'image' => 'required',
            'title' => 'required',
            'location' => 'required',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $card = new Card();
        $card->image = $request->image;
        $card->title = $request->title;
        $card->location = $request->location;
        $card->description = $request->description;

        $card->save();

        return response()->json(['id' => $card->id], 201);
    }

    public function show($id)
    {
        $card = Card::find($id);
        return $card;
    }

    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'image' => 'required',
            'title' => 'required',
            'location' => 'required',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $card = Card::findOrFail($request->id);
        $card->image = $request->image;
        $card->title = $request->title;
        $card->location = $request->location;
        $card->description = $request->description;

        $card->save();
        return $card;
    }

    public function destroy($id)
    {
        $card = Card::destroy($id);
        return $card;
    }
}
