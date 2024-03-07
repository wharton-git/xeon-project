<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function __invoke()
    {
        // Votre logique de contrôleur ici
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        $user = new User();
        $user->matricule = $request->matricule;
        $user->nom = $request->nom;
        $user->prenom = $request->prenom;
        $user->email = $request->email;
        $user->mdp = bcrypt($request->mdp);
        $user->save();

        return response()->json(['message' => 'Utilisateur créé avec succès'], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        try {
            $user = User::where('matricule', $request->matricule)
                        ->where('mdp', $request->mdp)
                        ->first();

            if ($user) {
                return response()->json($user);
            } else {
                return response()->json(['message' => 'Utilisateur non trouvé']);
            }
        } catch (\Exception $e) {
            // Enregistrer l'erreur dans les logs
            \Log::error($e->getMessage());
            // Retourner une réponse d'erreur générique
            return response()->json(['message' => 'Une erreur s\'est produite lors du traitement de votre demande'], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
