<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = ['canal_id', 'sender', 'content'];

    public function canal()
    {
        return $this->belongsTo(Canal::class);
    }

    public function sender()
    {
        return $this->belongsTo(Profil::class, 'sender');
    }
}
