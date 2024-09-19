import { useState } from 'react';
import Maddy4 from '../assets/img/maddy4.jpg';
import Maddy2 from '../assets/img/maddy2.jpg';
import Car1 from '../assets/img/car1.jpg';
import Details from '../assets/img/details.jpg';
import Lecture2 from '../assets/img/lecture2.jpg';
import GimmeImg from '../assets/img/gimme.jpg';
import Job2 from '../assets/img/job2.jpg';
import Pearls1 from '../assets/img/pearls1.jpg';
import Pearls2 from '../assets/img/pearls2.jpg';
import Girls from '../assets/img/girls.jpg';
import Warner1 from '../assets/img/warner1.jpg';
import Lee1 from '../assets/img/lee1.jpg';
import Roman from '../assets/img/roman.jpg';
import Dress1 from '../assets/img/dress1.jpg';
import Date2 from '../assets/img/date2.jpg';
import Lucky1 from '../assets/img/lucky.jpg';
import '../scss/style.scss';
import '../scss/components/_photosfilter.scss';

const PhotosFilter = () => {
    const initialPhotos = [
        { id: 1, category: 'myself', src: Maddy4, caption: 'mind as peaceful as the sea', rotationClass: 'rotate-right-5' },
        { id: 2, category: 'friends', src: GimmeImg, caption: ' roman <3', rotationClass: 'rotate-left-2' },
        { id: 3, category: 'job', src: Job2, caption: 'job ? more like passion', rotationClass: 'rotate-right-10' },
        { id: 4, category: 'myself', src: Maddy2, caption: 'your fav cowgirl', rotationClass: 'rotate-left-5' },
        { id: 5, category: 'job', src: Pearls1, caption: 'new adventures at Pearl\'s 𓇼', rotationClass: 'rotate-left-5' },
        { id: 6, category: 'friends', src: Girls, caption: 'girls back in Santa Barb\'', rotationClass: 'rotate-right-5' },
        { id: 7, category: 'job', src: Pearls2, caption: 'best food in town!! #Pearls', rotationClass: 'rotate-right-2' },
        { id: 8, category: 'friends', src: Roman, caption: 'roman can never be serious', rotationClass: 'rotate-left-5' },
        { id: 9, category: 'myself', src: Car1, caption: 'this city does drive people crazy 🤭', rotationClass: 'rotate-right-2' },
        { id: 10, category: 'friends', src: Warner1, caption: 'we\'re so #losers coded w/ warner', rotationClass: 'rotate-left-10' },
        { id: 11, category: 'myself', src: Details, caption: 'it\'s all in the details, darling ✧˖°.', rotationClass: 'rotate-left-5' },
        { id: 12, category: 'friends', src: Lee1, caption: 'always in a party mood w/ lee', rotationClass: 'rotate-right-2' },
        { id: 13, category: 'myself', src: Lecture2, caption: 'morning lecture', rotationClass: 'rotate-left-5' },
        { id: 14, category: 'lover', src: Date2, caption: 'some nightimes have nice surprises...', rotationClass: 'rotate-left-5' },
        { id: 15, category: 'myself', src: Dress1, caption: '"only bought this dress so you could take it off..."', rotationClass: 'rotate-right-5' },
        { id: 15, category: 'lover', src: Lucky1, caption: 'the stars, they aligned', rotationClass: 'rotate-left-10' }
    ];

    const [photos] = useState(initialPhotos);
    const [filter, setFilter] = useState('all');

    const filteredPhotos = photos.filter(photo => filter === 'all' || (filter !== 'null' && photo.category === filter));

    return (
        <section className="photos-filter">
            <div className='photos-filter-buttons'>
                <span> -`♡´- </span>
                <button className={`photos-filter-button ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}> All</button>
                <button className={`photos-filter-button ${filter === 'myself' ? 'active' : ''}`} onClick={() => setFilter('myself')}>Myself</button>
                <button className={`photos-filter-button ${filter === 'friends' ? 'active' : ''}`} onClick={() => setFilter('friends')}>Friends</button>
                <button className={`photos-filter-button ${filter === 'lover' ? 'active' : ''}`} onClick={() => setFilter('lover')}>Lover</button>
                <button className={`photos-filter-button ${filter === 'job' ? 'active' : ''}`} onClick={() => setFilter('job')}>Job</button>
                <span> -`♡´- </span>
            </div>

            <div className='photos-filter-wrap-containers'>
                <section className="photos-filter-wrap">
                    {filteredPhotos.map((photo, index) => (
                        <div className={`photos-filter-photo-item ${photo.rotationClass}`} key={index}>
                            <div className="photos-filter-img-box">
                                <img src={photo.src} alt={photo.category} />
                            </div>
                            <p>{photo.caption}</p>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}

export default PhotosFilter;
