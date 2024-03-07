use Illuminate\Database\Seeder;
use App\Models\Message;
use App\Models\User;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Créez 10 messages factices
        Message::factory(10)->create([
            'user_id' => function () {
                // Retourne un ID d'utilisateur aléatoire de la table users
                return User::inRandomOrder()->first()->id;
            },
            'type' => 'envoi', // Par exemple, tous les messages sont des envois
            'heure' => now()->toTimeString(), // Utilisez l'heure actuelle pour tous les messages
        ]);
    }
}
