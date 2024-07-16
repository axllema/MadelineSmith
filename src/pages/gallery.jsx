import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import Header from '../layout/header';
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
        <div>
            <Loader visible={loading} />

            <Header className="header"/>

            <div>
                <h1>Gallery Page</h1>
                <p>Photos randoms + des reseaux</p>
                <ul>
                    <li>selfie</li>
                    <li>bestie</li>
                    <li>job - hairdresser</li>
                    <li>instagram feed</li>
                </ul>
            </div>

            <Footer/>
        </div>
    );
}

export default Gallery;
