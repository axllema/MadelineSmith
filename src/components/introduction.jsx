import React from 'react';
import Maddy1 from '../assets/img/maddy1.jpg';
import Maddy2 from '../assets/img/maddy2.jpg';
import Job from '../assets/img/job1.jpg';
import '../scss/style.scss'
import '../scss/components/_introduction.scss';

function Introduction() {
    return (
        <section className="introduction">
                    
                    <h2> Hi, I'm Madeline Smith.</h2>
                    <h3> but everyone's calling me Maddy.</h3>

                    <section className="emojis">
                        🪞🕊️🤍✨
                    </section>
                    
                    <div className="introduction-images">
                        <img alt="Madeline Smith" src={Maddy1} className="intro-images-left" />
                        <img alt="Work" src={Job} className="intro-images-middle" />
                        <img alt="Madeline Smith" src={Maddy2} className="intro-images-right" />
                    </div>

                    <p className='introduction-info'> Hairstylist. 22. Californian. Loyal. Hard-working & Party-Animal.</p>
                    <p className='introduction-location'> ༘˚⋆𐙚 ↪ Los Santos  ོ 𖦹.✧˚</p>

                </section>
    );
}

export default Introduction;