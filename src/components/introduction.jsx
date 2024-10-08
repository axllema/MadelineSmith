import Maddy1 from '../assets/img/maddy1.jpg';
import Maddy2 from '../assets/img/maddy2.jpg';
import Job from '../assets/img/job1.jpg';
import '../scss/style.scss'
import '../scss/components/_introduction.scss';

function Introduction() {
    return (
        <section className="introduction">
                    
                    <h2> Hi, I&apos;m Madeline Summers.</h2>
                    <h3> but everyone calls me Maddy.</h3>

                    <section className="emojis">
                        <span role="img" aria-label="mirror"> 🪞 </span>
                        <span role="img" aria-label="dove"> 🕊️ </span>
                        <span role="img" aria-label="heart"> 🤍 </span>
                        <span role="img" aria-label="sparkles"> ✨ </span>
                    </section>
                    
                    <div className="introduction-images">
                        <img alt="Madeline Summers" src={Maddy1} className="intro-images-left" />
                        <img alt="Work" src={Job} className="intro-images-middle" />
                        <img alt="Madeline Summers" src={Maddy2} className="intro-images-right" />
                    </div>

                    <p className='introduction-info'> Waitress. 22. Californian. Loyal. Hard-working & Party-Animal.</p>
                    <p className='introduction-location'> ༘˚⋆𐙚 ↪ Los Santos  ོ 𖦹.✧˚</p>

                </section>
    );
}

export default Introduction;