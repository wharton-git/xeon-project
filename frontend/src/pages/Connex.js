    import { useState } from 'react';
    import http from '../http';
    import './../styles/css/Style.css'
    import Login from './../images/Login.png'
    import { Routes, Route, Link} from 'react-router-dom'
    import Homes from "./../components/home.jsx"

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

                    setErrorMessage('Connecté');
                    
                }
                
            } catch (error) {
                setUser(null);
                setErrorMessage('Utilisateur non trouvé');
            }
        };

        return (
            <div>
                <div className='logContainer'>
                    <div className='logContentLeft'>
                        <div>
                            <img src={Login} alt='Login' className='m-0'/>
                        </div>
                    </div>
                    <div className='logContentRight text-center h-max pt-20 pb-20'>
                    <h2 className='m-0 text-center text-5xl mb-10'>Se Connecter</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input className='p-3 bg-gray-500 text-white rounded-lg mb-3' type="text" placeholder='Matricule' value={matricule} onChange={(e) => setMatricule(e.target.value)} name='matricule'/>
                            </div>
                            <div>
                                <input className='p-3 bg-gray-500 text-white rounded-lg mb-3'  type="password" placeholder='Mot de passe' value={mdp} onChange={(e) => setMdp(e.target.value)} name='mdp'/>
                            </div>
                            <Link to={'/forum'} type="submit" className='p-2 bg-green-700 rounded-lg text-white animate-pulse mb-8'>Connection</Link>
                        </form>
                        {errorMessage && <p className=''>{errorMessage}</p>}
                    </div>
                </div>
            {errorMessage == 'Connecté' && 
            
            <Routes>
                <Route path="/home" element={<Homes />} />
            </Routes>

            }
            </div>
        );
    }
