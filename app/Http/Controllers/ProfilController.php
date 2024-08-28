<?php

namespace App\Http\Controllers;

use App\Models\Profil;
use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function store(Request $request){
        $data = $request->validate([
            'nom'=>['required', 'max:255']
        ]);
        Profil::create($data);
        
        
        return redirect()->back();
    }

}
