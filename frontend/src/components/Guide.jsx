import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './../styles/css/Style.css'
import il1 from './../images/Illust (1).png';
import il2 from './../images/Illustr2-removebg-preview.png';


function Guide ()  {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <div>
                <div className='bg-white h-screen absolute'>
                <div className='bg-red-200 absolute' id='cadre2'></div>
            <nav className="" id='navbar'>
                    <ul className="" id='navbar-nav'>
                        <div>
                            <li className="nav-item">
                                <Link to={'/home'} className='text-white'>ACCUEIL</Link>
                            </li>
                        </div>

                        <div id='drop-div'>
                            <li className="text-white" onClick={toggleDropdown}>
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
                            <li className="">
                                <Link to={'/guide'}>GUIDE</Link>
                            </li>
                        </div>
                        <div id='drop-div'>
                            <li className="" onClick={toggleDropdown2}>
                                Option {isOpen2 ? '▲' : '▼'}
                            </li>
                            {isOpen2 && (
                                <div className="" id='dropdown'>
                                    <Link to={{ pathname: '/connex' }} className="dropdown-item">
                                        Se Connecter
                                    </Link>
                                    <Link to={'/club'} className="dropdown-item">
                                        Aide
                                    </Link>
                                    <Link to={'/chat'} className="dropdown-item">
                                        Salon
                                    </Link>
                                    <a href='http://localhost/DEVHUNT-WIN_INIT/' className="dropdown-item">
                                        Forum
                                    </a>
                                </div>
                            )}
                        </div>
                    </ul>
                </nav>
                </div>

            <div className='guide cardw'>
            <div className='guide-title float-right'>
                    <h1>Mention et Parcours</h1>
                </div>
    
                <div className='guid-content'>
                    <div className='g1'>
                        
                    </div>
                    <div className='g2'>
                        <img src={il1} className='img-guide'/>   
                    </div>
                    <div className='g3'>
                        <img src={il2} className='img-guide'/>
                    </div>
                    <div className='g4'>
                        4
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Guide;