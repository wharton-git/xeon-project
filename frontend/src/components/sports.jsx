import React from 'react'
import Nav from './navbar'
import './../styles/css/Style.css'
import ASENIHOOPERS from './../images/ASENIHOOPER.png'
import ASENISOCCER from './../images/ASENISOCCER.png'
import C2ET from './../images/CE2TennisTable.png'
import ENIVOLLEY from './../images/ENIVOLLEY.png'

function Sport() {
    return (
        <div>
        <Nav />
            <div className='cardw'>
                <div className='content-info'>
                    <div className='leftw'>
                        <img src={ASENIHOOPERS} alt='ENI Hoopers'/>
                    </div>
                    <div className='rightw w-full'>
                        <div className='title'>
                            As ENI - Hoopers :
                        </div>
                        <div className='desc'>
                            C’est une association sportive qui rassemble des passionnés de basketball de tous âges et de tous niveaux. Le club a  pour objectif de promouvoir la pratique du basketball dans un esprit de convivialité et de fair-play.
                        </div>
                    </div>
                </div>

                <div className='content-info'>
                    <div className='leftw'>
                        <img src={ASENISOCCER} alt='ENI Hoopers'/>
                    </div>
                    <div className='rightw w-full'>
                        <div className='title'>
                            As ENI - Soccer Team :
                        </div>
                        <div className='desc'>
                        C'est une communauté vibrante d'étudiants passionnés par le football et unis par un esprit d'équipe indéfectible.Que vous soyez un joueur expérimenté ou un novice enthousiaste, le club vous accueille à bras ouverts.
                        </div>
                    </div>
                </div>

                <div className='content-info'>
                    <div className='leftw'>
                        <img src={C2ET} alt='ENI Hoopers'/>
                    </div>
                    <div className='rightw w-full'>
                        <div className='title'>
                        As ENI  - Tennis Team :
                        </div>
                        <div className='desc'>
                        Ouvert à tous les niveaux, que vous soyez débutant ou confirmé, le club vous propose des entraînements réguliers pour vous perfectionner et progresser à votre rythme. Ambiance conviviale et esprit d'équipe garantis.
                        </div>
                    </div>
                </div>

                <div className='content-info'>
                    <div className='leftw'>
                        <img src={ENIVOLLEY} alt='ENI Hoopers'/>
                    </div>
                    <div className='rightw w-full'>
                        <div className='title'>
                        As ENI - EVBC :
                        </div>
                        <div className='desc'>
                        C’est un groupe vibrant et accueillant qui rassemble des étudiants passionnés par ce sport. Que vous soyez un joueur expérimenté ou un débutant enthousiaste, notre club vous offre l'opportunité de vous perfectionner, de vous amuser et de tisser des liens durables avec d'autres étudiants.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sport;