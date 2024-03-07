<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            Schema::create('messages', function (Blueprint $table) {
                $table->id();
                $table->text('contenu');
                $table->unsignedBigInteger('user_id'); // Matricule de l'utilisateur
                $table->enum('type', ['envoi', 'reception']); // Type du message
                $table->date('date');
                $table->time('heure');
                $table->timestamps();

                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
