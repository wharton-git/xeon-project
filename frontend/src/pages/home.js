import { useState } from 'react';
import http from '../http';

export default function Home() {
    const [matricule, setMatricule] = useState('');
    const [mdp, setMdp] = useState('');
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const response = await http.post('/post', { matricule, mdp });
            if (!response) {
                
            setErrorMessage('Utilisateur non trouvé');
            }else {
                setUser(response.data);
                const userId = sessionStorage.getItem('userId');
                setErrorMessage('');
            }
            
        } catch (error) {
            setUser(null);
            setErrorMessage('Utilisateur non trouvé');
        }
    };

    return (
        <div>
            <h2>Recherche d'utilisateur</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Matricule :</label>
                    <input type="text" value={matricule} onChange={(e) => setMatricule(e.target.value)} name='matricule'/>
                </div>
                <div>
                    <label>mdp :</label>
                    <input type="password" value={mdp} onChange={(e) => setMdp(e.target.value)} name='mdp'/>
                </div>
                <button type="submit">Rechercher</button>
            </form>
            {user && (
                <div>
                    <h3>Résultat de la recherche :</h3>
                    <p>Matricule : {user.matricule}</p>
                    <p>Nom : {user.nom}</p>
                    <p>Mdp : {user.mdp}</p>
                </div>
            )}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}
