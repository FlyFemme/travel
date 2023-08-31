<?php

namespace App\Http\Controllers\Api;

use App\Models\Card;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewCardController extends Controller
{
    public function index()
    {
        $cards = Card::all();
        return $cards;
    }

    public function store(Request $request)
    {
        $card = new Card();
        $card->image = $request->input('image');
        $card->title = $request->input('title');
        $card->location = $request->input('location');
        $card->description = $request->input('description');

        $card->save();
    }

    public function show($id)
    {
        $card = Card::find($id);
        return $card;
    }

    public function update(Request $request, $id)
    {
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
