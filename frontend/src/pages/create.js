import { useState } from 'react';
import http from '../http';

export default function CreateUser() {
    const [formData, setFormData] = useState({
        matricule: '',
        nom: '',
        prenom: '',
        email: '',
        mdp: '',
        confirmMdp: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.mdp !== formData.confirmMdp) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        try {
            await http.post('/create', formData);
            alert('Utilisateur créé avec succès');
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur :', error);
            alert('Une erreur s\'est produite lors de la création de l\'utilisateur');
        }
    };

    return (
        <div>
            <h2>Création d'utilisateur</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Matricule :</label>
                    <input type="text" name="matricule" value={formData.matricule} onChange={handleChange}/>
                </div>
                <div>
                    <label>Nom :</label>
                    <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
                </div>
                <div>
                    <label>Prénom :</label>
                    <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Mot de passe :</label>
                    <input type="password" name="mdp" value={formData.mdp} onChange={handleChange} />
                </div>
                <div>
                    <label>Confirmer mot de passe :</label>
                    <input type="password" name="confirmMdp" value={formData.confirmMdp} onChange={handleChange} />
                </div>
                <button type="submit">Créer</button>
            </form>
        </div>
    );
}