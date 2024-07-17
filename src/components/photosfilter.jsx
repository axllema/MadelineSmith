import { useState } from 'react';
import Maddy3 from '../assets/img/maddy3.jpg';
import SantaBarbara from '../assets/img/santabarbara1.jpg';
import Maddy4 from '../assets/img/maddy4.jpg';
import '../scss/style.scss';
import '../scss/components/_photosfilter.scss';

const PhotosFilter = () => {
    const initialPhotos = [
        { id: 1, category: 'selfie', src: Maddy4 },
        { id: 2, category: 'bestie', src: Maddy3 },
        { id: 3, category: 'job', src: SantaBarbara},
    ];

    const [photos] = useState(initialPhotos);
    const [filter, setFilter] = useState('all');

    const filteredPhotos = photos.filter(photo => filter === 'all' || photo.category === filter);

    return (
        <div>
            <div>
                <button onClick={() => setFilter('all')}>Toutes</button>
                <button onClick={() => setFilter('selfie')}>Selfies</button>
                <button onClick={() => setFilter('bestie')}>Besties</button>
                <button onClick={() => setFilter('job')}>Job</button>
            </div>

            <div>
                {filteredPhotos.map(photo => (
                <img key={photo.id} src={photo.src} alt={photo.category} />
                ))}
            </div>
        </div>
    );
};

export default PhotosFilter;