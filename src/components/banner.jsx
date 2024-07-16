import { Link } from 'react-router-dom';
import SurferGirl from '../assets/img/surfergirl1.jpg';  
import '../scss/style.scss'
import '../scss/components/_banner.scss';

function Banner() {
    return (
        <section className="banner">
        <img alt="crédit : Jess Loiterton" src={SurferGirl} className="banner-image" />

        <div className="banner-text">
            <p className='text1'>I&apos;ll be </p>
            <p className='text2'> <i className='hair'> hair </i> for you...</p>

        <div className='buttons'>
            <Link to="/gallery">
                <button> ♡ life moments ♡ </button>
            </Link>

            <Link to="/contact">
                <button className='button, lol'> ♡ contact me ♡ </button>
            </Link>
        </div>

        </div>

    </section>
    );
}

export default Banner;