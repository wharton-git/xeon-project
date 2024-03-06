import React from 'react'
import { Link } from 'react-router-dom';



import './../styles/css/Style.css'

function Index () {
    return (
        <div className="h-screen w-screen overflow-hidden bg-white absolute">
            <div className='absolute' id='boule1'></div>
            <div className='absolute' id='boule2'></div>
            <div className='absolute' id='boule3'></div>
            <div className='absolute' id='boule4'></div>
            <div className='absolute' id='boule5'></div>
            <div className='absolute' id='boule6'></div>
            <div className='absolute' id='boule7'></div>
            <div className='absolute' id='boule8'></div>
            <div className='absolute' id='glass' >
                <div>Bienvenu aux <br/> Nouveaux étudiants</div>
                <Link to={{pathname: '/home'}} className='rounded-md' id='btn-index'>Continuer</Link>
            </div>
        </div>
    )
}

export default Index;