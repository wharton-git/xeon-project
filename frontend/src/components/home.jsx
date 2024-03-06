import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import First from './first';
import Sport from './sports'; // Assurez-vous que le nom du fichier est correctement orthographié
import Club from './club';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className='bg-white h-screen absolute'>
                <div className='bg-red-200 absolute -rotate-45' id='cadre'></div>
                <nav className="" id='navbar'>
                    <ul className="" id='navbar-nav'>
                        <div>
                            <li className="nav-item">
                                <Link to={'/home'}>ACCUEIL</Link>
                            </li>
                        </div>

                        <div id='drop-div'>
                            <li className="" onClick={toggleDropdown}>
                                ACTIVITE {isOpen ? '▲' : '▼'}
                            </li>
                            {isOpen && (
                                <div className="" id='dropdown'>
                                    <Link to={{ pathname: '/sport' }} className="dropdown-item">
                                        SPORT
                                    </Link>
                                    <Link to={'/club'} className="dropdown-item">
                                        CLUB
                                    </Link>
                                    <Link to={'/'} className="dropdown-item">
                                        COMPETITION
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div>
                            <li className="text-white">
                                <Link to={'/'}>SECTION</Link>
                            </li>
                        </div>
                        <div>
                            <li className="text-white">
                                <Link to={'/'}>AIDE</Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<First />} />
                <Route path="/sport" element={<Sport />} />
                <Route path="/club" element={<Club />} />
            </Routes>
        </div>
    );
}

export default Home;
