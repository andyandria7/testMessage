<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Canal extends Model
{
    use HasFactory;

    protected $fillable = ['name','description','image'];

    public function messages() {
        return $this->hasMany(Message::class);
    }
}
