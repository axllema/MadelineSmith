import { useState } from 'react';
import Maddy4 from '../assets/img/maddy4.jpg';
import Maddy2 from '../assets/img/maddy2.jpg';
import GimmeImg from '../assets/img/gimme.jpg';
import Job2 from '../assets/img/job2.jpg';
import '../scss/style.scss';
import '../scss/components/_photosfilter.scss';

const PhotosFilter = () => {
    const initialPhotos = [
        { id: 1, category: 'selfie', src: Maddy4, caption: 'mind as peaceful as the sea', rotationClass: 'rotate-right-5' },
        { id: 2, category: 'bestie', src: GimmeImg, caption: '<3', rotationClass: 'rotate-left-2' },
        { id: 3, category: 'job', src: Job2, caption: 'job ? more like passion', rotationClass: 'rotate-right-10' },
        { id: 4, category: 'selfie', src: Maddy2, caption: 'your fav cowgirl', rotationClass: 'rotate-left-5' },
    ];

    const [photos] = useState(initialPhotos);
    const [filter, setFilter] = useState('all');

    const filteredPhotos = photos.filter(photo => filter === 'all' || (filter !== 'null' && photo.category === filter));

    return (
        <section className="photos-filter">
            <div className='photos-filter-buttons'>
                <span> -`♡´- </span>
                <button className={`photos-filter-button ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Toutes</button>
                <button className={`photos-filter-button ${filter === 'selfie' ? 'active' : ''}`} onClick={() => setFilter('selfie')}>Selfies</button>
                <button className={`photos-filter-button ${filter === 'bestie' ? 'active' : ''}`} onClick={() => setFilter('bestie')}>Besties</button>
                <button className={`photos-filter-button ${filter === 'null' ? 'active' : ''}`} onClick={() => setFilter('null')}>Lover</button>
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
