import React from 'react';
import Nav from './navbar';
import C3LF from './../images/C3LF.png';
import C2E from './../images/C2E.png';
import CybSec from './../images/CybSec.png';
import ECP from './../images/ECPEnglish.png';
import ARTCENI from './../images/ARTCENI.png';
import RHI from './../images/RHI.png';
import ENIBOT from './../images/ENIBOT.png';
import DSAlgo from './../images/DSAlgo.png';
import DANSE from './../images/DANSE.png';
import GBU from './../images/GBU.png';

function Club() {
    return (
        <div>
            <Nav />
            <div className='cardw'>
            <div className='content-info'>
                <div className='leftw'>
                    <img src={C3LF} alt='ENI Hoopers'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        As ENI - Hoopers :
                    </div>
                    <div className='desc'>
                        C’est une association sportive qui rassemble des passionnés de basketball de tous âges et de tous niveaux. Le club a  pour objectif de promouvoir la pratique du basketball dans un esprit de convivialité et de fair-play.
                    </div>
                </div>
            </div>

            <div className='content-info'>
                <div className='leftw'>
                    <img src={C2E} alt='ENI Hoopers'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        As ENI - Hoopers :
                    </div>
                    <div className='desc'>
                        C’est une association sportive qui rassemble des passionnés de basketball de tous âges et de tous niveaux. Le club a  pour objectif de promouvoir la pratique du basketball dans un esprit de convivialité et de fair-play.
                    </div>
                </div>
            </div>

            <div className='content-info'>
                <div className='leftw'>
                    <img src={CybSec} alt='CybSec' className='bg-green-800 rounded-md'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        CybSec :
                    </div>
                    <div className='desc'>
                        C’est une association qui se consacre à la sécurité informatique et à la sensibilisation aux cybermenaces.
                    </div>
                </div>
            </div>

            <div className='content-info'>
                <div className='leftw'>
                    <img src={ECP} alt='ECP English Club'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        ECP English Club :
                    </div>
                    <div className='desc'>
                        L'ECP English Club offre aux étudiants l'opportunité de pratiquer et d'améliorer leur anglais à travers diverses activités et événements.
                    </div>
                </div>
            </div>

            <div className='content-info'>
                <div className='leftw'>
                    <img src={ARTCENI} alt='Artcenî'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        Artcenî :
                    </div>
                    <div className='desc'>
                        Artcenî est une association qui promeut les arts et la culture au sein de l'école.
                    </div>
                </div>
            </div>

            <div className='content-info'>
                <div className='leftw'>
                    <img src={RHI} alt='République des Hautes Instances'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        République des Hautes Instances :
                    </div>
                    <div className='desc'>
                        Cette association est dédiée à la gestion des instances étudiantes et à la représentation des étudiants dans les instances décisionnelles de l'école.
                    </div>
                </div>
            </div>

            <div className='content-info'>
                <div className='leftw'>
                    <img src={ENIBOT} alt='ENIBOT'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        ENIBOT :
                    </div>
                    <div className='desc'>
                        ENIBOT est le club de robotique de l'école, où les étudiants peuvent explorer et créer des robots pour différents projets et compétitions.
                    </div>
                </div>
            </div>

            <div className='content-info'>
                <div className='leftw'>
                    <img src={DSAlgo} alt='Club DSAlgo' className='bg-green-800 rounded-md'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        Club DSAlgo :
                    </div>
                    <div className='desc'>
                        Ce club se concentre sur les structures de données et les algorithmes, fournissant aux étudiants un environnement pour pratiquer et approfondir leurs compétences en programmation.
                    </div>
                </div>
            </div>

            <div className='content-info'>
                <div className='leftw'>
                    <img src={DANSE} alt='Club DANSE'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        Club DANSE :
                    </div>
                    <div className='desc'>
                        Le club DANSE offre aux étudiants la possibilité de pratiquer et de performer différents styles de danse dans un environnement amusant et accueillant.
                    </div>
                </div>
            </div>

            <div className='content-info'>
                <div className='leftw'>
                    <img src={GBU} alt='Génie du Bien-Être Universitaire'/>
                </div>
                <div className='rightw w-full'>
                    <div className='title'>
                        Génie du Bien-Être Universitaire :
                    </div>
                    <div className='desc'>
                        Cette association se consacre au bien-être des étudiants en organisant des activités et des événements visant à promouvoir la santé physique et mentale.
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Club;
