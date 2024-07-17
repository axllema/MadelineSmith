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

                <div className='gallery-elements-quotes'>
                    <p> QUOTE </p>
                </div>

                <div className='gallery-elements-filters'>
                    <PhotosFilter />
                </div>


                <div className='gallery-interlude'>
                    <p> ⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆ </p>
                </div>


                <div className='gallery-elements-feed'>
                    <InstaFeed/>
                </div>

            </div>

            <Footer/>
        </div>
    );
}

export default Gallery;
