<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    /*protected $table = 'Card'; 
    protected $primaryKey = 'id'; */
    protected $fillable = [
        'title',
        'location',
        'image',
        'description'
    ];

    protected $hidden = [
        "created_at",
        "updated_at"
    ];

}
