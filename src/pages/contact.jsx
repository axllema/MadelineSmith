import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import Header from '../layout/header';
import Footer from '../layout/footer.jsx';
import Sun1 from '../assets/img/sun1.png';
import Sun2 from '../assets/img/sun2.png';
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
                    <div className="contact-info">
                            <h2> Location </h2>
                            <p> Los Santos, California </p>
                    </div>

                    <div className="contact-info">
                        <h2> Job </h2>
                        <p> Hair Salon, Los Santos</p>
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
                    <div className="contact-info">
                        <h2> Phone </h2>
                        <p>555-...-...</p>
                    </div>

                    <div className="contact-info">
                        <h2> Email </h2>
                        <p> axpostrophe@discord.com </p>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    );
}

export default Contact;
