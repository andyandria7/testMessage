<?php

namespace App\Http\Controllers;

use App\Models\Canal;
use App\Models\Message;
use App\Models\Profil;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CanalController extends Controller
{

    public function index(){
        $canaux = Canal::with('messages')->get();
        $messages = Message::all();




        return Inertia::render('Welcome', [
            'canaux' => $canaux,
            'messages' => $messages
        ]);
    }
    public function store(Request $request){
        $data = $request->validate([
            'name' => ['required','min:2'],
            'description'=>['nullable'],
            'image'=>['nullable','image','mimes:png,jpg','max:2048']
        ]);

        if($request->hasFile('image')){
            $data['image'] = $request->file('image')->store('upload','public');
        }

        Canal::create($data);

        return redirect()->back();

    }

    
    

    public function mess(Request $request){
        $data = $request->validate([
            'canal_id' => ['required', 'exists:canals,id'],
            'content' => ['required', 'string'],
        ]);

        $data['sender'] = '1';
        
        Message::create($data);

        return redirect()->back();
    }
    

    public function destroy(Canal $id)
    {
        $id->delete();

        return redirect()->route('home');
    }
}
