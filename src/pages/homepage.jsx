import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import Header from '../layout/header.jsx';
import Banner from '../components/banner';
import Introduction from '../components/introduction';
import BottomSection from '../components/bottomsection';
import Playlist from '../components/playlist';
import Footer from '../layout/footer';
import '../scss/style.scss';
import '../scss/pages/_homepage.scss';

function Homepage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Loader visible={loading} />
        
            <div className="homepage"> 
                <Header />
                <Banner />
                <Introduction />
                
                <BottomSection />

                <Playlist />

            <Footer />
            </div>
        </div>
    );
}

export default Homepage;
