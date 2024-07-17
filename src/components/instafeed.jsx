import Maddy3 from '../assets/img/maddy3.jpg';
import SantaBarbara from '../assets/img/santabarbara1.jpg';
import Maddy4 from '../assets/img/maddy4.jpg';
import '../scss/style.scss';
import '../scss/components/_instafeed.scss';

const InstaFeed = () => {
    return (
        <div className='instafeed'>

        <div className='instafeed-container'>

            <div className='instafeed-container-photos'>
                <img alt="Madeline Smith" src={Maddy3} className='' />
                <img alt="Santa Barbara" src={SantaBarbara} className='' />
                <img alt="Madeline Smith" src={Maddy4} className='' />
            </div>

        </div>

        </div>


    );
};

export default InstaFeed;