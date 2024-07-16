// import Loader from '../components/Loader';
import Header from '../layout/header';
import SurferGirl from '../assets/img/surfergirl1.jpg';  
import Introduction from '../components/introduction.jsx';
import Maddy3 from '../assets/img/maddy3.jpg';
import SantaBarbara from '../assets/img/santabarbara1.jpg';
import Maddy4 from '../assets/img/maddy4.jpg';
import Smiley from '../assets/img/smiley2.jpg';
import Playlist from '../components/playlist.jsx';
import Footer from '../layout/footer.jsx';
import '../scss/style.scss'
import '../scss/pages/_homepage.scss';

function Homepage() {
    return (
        <div>
            {/* <Loader visible={loading} /> */}
        
            <div className="homepage"> 

                <Header className="header"/>

                <section className="hero">
                    <img alt="Surfer Girl" src={SurferGirl} className="hero-image" />

                    <div className="hero-text">
                        <p className='text1'>I&apos;ll be </p>
                        <p className='text2'> <i>hair</i> for you...</p>

                        <button> ♡  life moments ♡ </button>
                    </div>

                </section>

                <Introduction/>

                <section className="bottom-page">

                    <div className="bottom-page-images">
                            <img alt="Madeline Smith" src={Maddy3} className='bottom-page-images-maddy' />
                            <img alt="Santa Barbara" src={SantaBarbara} className='bottom-page-images-santabarbara' />
                            <img alt="Smiley" src={Smiley} className='bottom-page-images-smiley1' />
                            <img alt="Madeline Smith" src={Maddy4} className='bottom-page-images-maddyplage' />
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

            </div>

                <Playlist />
                <Footer/>
        </div>
    );
}

export default Homepage;