import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import Header from '../layout/header';
import Smiley1 from '../assets/img/smiley1.png';
import Smiley2 from '../assets/img/smiley2.jpg';
import Flower1 from '../assets/img/flower1.jpg';
import Flower2 from '../assets/img/flower2.jpg';
import Pearls1 from '../assets/img/pearls1.jpg';
import LosSantos1 from '../assets/img/lossantos1.jpg';
import MirrorSelfie from '../assets/img/mirror.jpg';
import Maddss from '../assets/img/maddss.jpg';
import Sun1 from '../assets/img/sun1.png';
import Sun2 from '../assets/img/sun2.png';
import Footer from '../layout/footer.jsx';
import '../scss/style.scss';
import '../scss/pages/_contact.scss';

function Contact() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='contact'>

            <Loader visible={loading} />
            <Header className="header"/>

            <div className='contact-quotes'>
                <p className='contact-quotes-text'> &quot;call me, maybe..?&quot; </p>
            </div>

            <div className="contact-container-1">

                <div className="contact-infos-1">

                    <div className="background-info">
                        <div className="contact-info">
                                <h2> Location </h2>
                                <p> Los Santos, California </p>
                        </div>
                    </div>

                    <div className="background-info">
                        <div className="contact-info">
                            <h2> Job </h2>
                            <p> Pearl&rsquo;s , Los Santos</p>
                        </div>
                    </div>

                    <div className="contact-images">
                        <img alt="Smiley" src={Smiley2} className='contact-container-smiley2' />

                        <img alt="Pearls" src={Pearls1} className='contact-container-pearls' />
                        <img alt="Los Santos (Los Angeles)" src={LosSantos1} className='contact-container-lossantos' />

                        <img alt="Flower" src={Flower1} className='contact-container-smiley1 flower1' />


                        <img alt="Smiley" src={Smiley1} className='contact-container-smiley1' />

                        <img alt="Maddy mirror selfie" src={MirrorSelfie} className='contact-container-mirrorselfie' />
                        <img alt="Maddy coiffeuse" src={Maddss} className='contact-container-maddss' />

                        <img alt="Smiley" src={Smiley2} className='contact-container-smiley2' />

                        <img alt="Smiley" src={Flower2} className='contact-container-smiley2 flower2' />
                    </div>


                </div>
            </div>

            <div className="sun-container">
                    <img alt="" src={Sun1} className="sun-container-img" />
                    <img alt="" src={Sun2} className="sun-container-img" />
                    <img alt="" src={Sun1} className="sun-container-img" />
            </div>
            
            <div className="contact-container-2">

                <div className="contact-infos-2">

                    <div className="background-info">
                        <div className="contact-info">
                            <h2> Phone </h2>
                            <p> 555-11139 </p>
                        </div>
                    </div>

                    <div className="background-info">
                        <div className="contact-info">
                            <h2> Email </h2>
                            <p> axpotrophe@discord.com </p>
                        </div>
                    </div>

            </div>
        </div>

            <Footer/>

        </div>
    );
}

export default Contact;