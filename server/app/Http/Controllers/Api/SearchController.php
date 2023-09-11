<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Card;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');

        $cards = Card::where('title', 'LIKE', "%$query%")
            ->orWhere('location', 'LIKE', "%$query%")
            ->orderBy('title', 'asc')
            ->get();

        return $cards;
    }
}
