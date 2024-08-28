<?php

use App\Http\Controllers\CanalController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


// profil
Route::post('/createPseudo', [ProfilController::class, 'store'])->name('createPseudo');

// canal
Route::post('canal/create', [CanalController::class, 'store'])->name('canal.create');
Route::get('/', [CanalController::class, 'index'])->name('home');
Route::get('/canal/{id}/messages', [CanalController::class, 'show'])->name('canal.show');
Route::post('/messages', [CanalController::class, 'mess'])->name('messages.store');
Route::delete('/canal/delete/{id}', [CanalController::class, 'destroy'])->name('canal.delete');



require __DIR__.'/auth.php';
