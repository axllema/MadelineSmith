import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import Header from '../layout/header';
import Banner from '../components/banner.jsx';
import Introduction from '../components/introduction.jsx';
import AudioPlayer from '../components/audioplayer';
import BottomSection from '../components/bottomsection.jsx';
import Playlist from '../components/playlist.jsx';
import Footer from '../layout/footer.jsx';
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
                <Header className="header"/>
                <Banner/>
                <Introduction/>
                
                {/* Utilisation de AudioPlayer avec démarrage automatique */}
                <AudioPlayer audioSrc="../src/assets/Water.mp3" />
                
                <BottomSection />
            </div>
            
            <Playlist />
            <Footer/>
        </div>
    );
}

export default Homepage;