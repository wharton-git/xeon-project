import React from 'react';
import './../styles/css/Style.css';
import ENIImage from './../images/2418407040_947568623661289_7629070449509844651_n.png';

function First() {
    return (
        <div>
            <div className='cardw'>
                <div className='flex flex-1 align-middle'>
                    <div className='w-full' id='firstTxt'>
                        C'est avec un grand plaisir que nous vous accueillons au sein de notre communauté dynamique et engagée.
                    </div>
                    <div className=' w-full' id='firstImg'>
                        <div className='overflow-hidden'>
                            <img src={ENIImage} alt='ENI' id='ENIimg'/>
                        </div>
                    </div>
                    <div className='absolute' id='firstTxt2'>
                        ECOLE NATIONALE <br/> D'INFORMATIQUE
                    </div>
                </div>
            </div>
        </div>
    );
}

export default First;
