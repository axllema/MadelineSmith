import Background1 from '../assets/img/background1.jpg';
import LifeinvaderPics from '../data/lifeinvaderpics.jsx';
import '../scss/style.scss';
import '../scss/components/_instafeed.scss';

const InstaFeed = () => {
    return (
        <div className='instafeed'>
            <img alt="Madeline Smith" src={Background1} className='instafeed-background' />

            <div className='instafeed-container'>
                <h1 className='instafeed-container-title'> what&rsquo;s new on @madelinesmith lifeinvader? </h1>

                <div className='instafeed-container-photos'>
                    {LifeinvaderPics.map(pic => (
                        <div key={pic.id} className='instafeed-container-photos-item'>
                            <img alt={pic.caption} src={pic.image} className='instafeed-container-photos-item-img' />
                            <div className='instafeed-container-photos-item-overlay'>
                                <div className='instafeed-container-photos-item-caption'>{pic.caption}</div>
                                <div className='instafeed-container-photos-item-hashtags'>
                                    {pic.hashtags.join(' ')}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstaFeed;