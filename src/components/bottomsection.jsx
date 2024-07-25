import Maddy3 from '../assets/img/maddy3.jpg';
import SantaBarbara from '../assets/img/santabarbara1.jpg';
import Maddy4 from '../assets/img/maddy4.jpg';
import Smiley from '../assets/img/smiley2.jpg';
import '../scss/style.scss'
import '../scss/components/_bottomsection.scss';

function BottomSection() {
    return (
        <section className="bottom-page">
                    <div className="bottom-page-images">
                            <img alt="Madeline Summers" src={Maddy3} className='bottom-page-images-maddy' />
                            <img alt="Santa Barbara" src={SantaBarbara} className='bottom-page-images-santabarbara' />
                            <img alt="Smiley" src={Smiley} className='bottom-page-images-smiley1' />
                            <img alt="Madeline Summers" src={Maddy4} className='bottom-page-images-maddyplage' />
                            <img alt="Smiley" src={Smiley} className='bottom-page-images-smiley2' />
                    </div>

                    <section className="bottom-page-quotes">
                        <h2> WHEREVER THE WIND BLOWS...</h2>
                        <p className='bottom-page-quotes-one'>&quot;You have been going about it all wrong, you know that you have done this all along.&quot;</p>

                        <ul className="bottom-page-quotes-list">
                            <li>&quot;Just remember...</li>
                            <li>you have no idea how amazing life is about to get.</li>
                            <li>Just trust the process.&quot;</li>
                        </ul>

                        <section className="bottom-page-quotes-emojis">
                            ‧₊˚🤍ྀི✩ ₊˚🎧₊˚☁️₊🌊.⋆🐚.ೃ⊹♡
                        </section>
                    </section>
                </section>
    );
}

export default BottomSection;