import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import Header from '../layout/header';
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

            <div>
                <h1>Contact Page</h1>
                <ul>
                    <li>telephone GTA</li>
                    <li>adresse GTA (quartier?), Los Santos</li>
                    <li>job - hairdresser / autre, où ça se trouve</li>
                    <li>instagram/ life invader @</li>
                    <li>email (discord irl) : axpostrophe@discord.com</li>
                </ul>
            </div>

            <Footer/>

        </div>
    );
}

export default Contact;
