<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profil extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom'
    ];

    public function messages()
    {
        return $this->hasMany(Message::class, 'sender', 'id');
    }
}
