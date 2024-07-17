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

    useEffect(() => {
        const hoverEffects = document.querySelectorAll('.hover-effect');
        hoverEffects.forEach((element, index) => {
            const delay = index * 0.3;
            element.style.animationDelay = `${delay}s`;
        });
    }, []);

    return (
        <div className='gallery'>
            <Loader visible={loading} />

            <Header className="header" />

            <div className='gallery-elements'>

                <div className='gallery-elements-quotes'>

                    <div className='gallery-elements-quotes-one'>
                        <p>
                            <span className="hover-effect">❀</span>
                            <span className="hover-effect">𖤣</span>
                            <span className="hover-effect">𖥧</span>
                            <span className="hover-effect">𖡼</span>
                            <span className="hover-effect">⊱</span>
                            <span className="hover-effect">✿</span>
                            <span className="hover-effect">⊰</span>
                            <span className="hover-effect">𖡼</span>
                            <span className="hover-effect">𖥧</span>
                            <span className="hover-effect">𖤣</span>
                            <span className="hover-effect">❀</span>
                        </p>
                        <p className='gallery-elements-quotes-one-title'>LIFE MOMENTS</p>
                        <p>
                            <span className="hover-effect">❀</span>
                            <span className="hover-effect">𖤣</span>
                            <span className="hover-effect">𖥧</span>
                            <span className="hover-effect">𖡼</span>
                            <span className="hover-effect">⊱</span>
                            <span className="hover-effect">✿</span>
                            <span className="hover-effect">⊰</span>
                            <span className="hover-effect">𖡼</span>
                            <span className="hover-effect">𖥧</span>
                            <span className="hover-effect">𖤣</span>
                            <span className="hover-effect">❀</span>
                        </p>
                    </div>

                    <p className='gallery-elements-quotes-text'> &quot;be fearless in the pursuit of what sets your soul on fire.&quot; </p>
                </div>

                <div className='gallery-elements-filters'>
                    <PhotosFilter />
                </div>

                <div className='gallery-interlude'>
                    <p> ･*:❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･ </p>
                    <p></p>
                    <p> ˙✧˖°･  [◉¯] ･ ༘ ⋆｡° </p>
                    <p></p>
                    <p> ･*:❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･ </p>
                </div>

                <div className='gallery-elements-feed'>
                    <InstaFeed />
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Gallery;
