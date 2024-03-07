import  {React, useState} from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function Nav () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };

    return (
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
                <Link to={'/sport'} className="dropdown-item">
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
    )
}

export default Nav;