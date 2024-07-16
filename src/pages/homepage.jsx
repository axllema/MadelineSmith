import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import Banner from '../components/banner';
import Introduction from '../components/introduction';
import BottomSection from '../components/bottomsection';
import Playlist from '../components/playlist';
import '../scss/style.scss';
import '../scss/pages/_homepage.scss';
import Header from '../layout/header.jsx';

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

            </div>
        </div>
    );
}

export default Homepage;
