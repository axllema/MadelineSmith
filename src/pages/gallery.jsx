import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import Header from '../layout/header';
import PhotosFilter from '../components/photosfilter';
import InstaFeed from '../components/instafeed';
import Footer from '../layout/footer.jsx';
import '../scss/style.scss';
import '../scss/pages/_gallery.scss';

function Gallery() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='gallery'>
            <Loader visible={loading} />

            <Header className="header" />

            <div className='gallery-elements'>

                <h1>Gallery Page</h1>
                <p> QUOTE </p>

                <div className='gallery-elements-filters'>
                    <PhotosFilter />
                    
                    <p>Photos randoms + des reseaux</p>

                    <ul>
                        <li>selfie</li>
                        <li>bestie</li>
                        <li>job - hairdresser</li>
                    </ul>
                </div>

                <div className='gallery-elements-feed'>
                    <InstaFeed/>
                    
                    <ul>
                        <li>instagram feed</li>
                    </ul>
                </div>

            </div>

            <Footer/>
        </div>
    );
}

export default Gallery;
