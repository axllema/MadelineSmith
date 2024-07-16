import CoastImg from '../assets/img/coast.jpg';
import GardenImg from '../assets/img/garden.jpg';
import GimmeImg from '../assets/img/gimme.jpg';
import SueImg from '../assets/img/SueME.jpg';
import OffImg from '../assets/img/offto.jpg';
import WaterImg from '../assets/img/shells.jpg';
import '../scss/components/_playlist.scss';

function Playlist() {
    const tracks = [
        { img: SueImg, label: '࣭ ⭑ཐིཋྀ Sue Me - Sabrina Carpenter ཐིཋ๋ྀ࣭ ⭑' },
        { img: GimmeImg, label: '｡ﾟ𖤓 ﾟ Gimme! Gimme! (...) - ABBA ｡ﾟ𖤓 ﾟ' },
        { img: OffImg, label: '˚⋆ᡣ𐭩 Off To The Races - Lana Del Rey ᡣ𐭩˚⋆' },
        { img: GardenImg, label: '✮⋆˙ The Chain - Fleetwood Mac ✮⋆˙' },
        { img: CoastImg, label: '༘ ೀ Water - Tyla  ༘ ೀ' },
        { img: WaterImg, label: '˖°𓇼 Coast - Hailee Steinfeld 𓇼°˖' },
    ];

    return (
        <section className="playlist" id="playlist">
            <h1 className='playlist-title'>Playlist</h1>

            <section className="playlist-wrap" id="playlist-wrap">
                {tracks.map((item, index) => {
                    // Séparation du label en deux parties au niveau du tiret "-"
                    const parts = item.label.split(' - ');
                    return (
                        <div className="playlist-item" key={index}>
                            <div className="img-box">
                                <img src={item.img} alt={parts[1]} />
                            </div>
                            <p>
                                {parts[0]}<br />- {parts[1]}
                            </p>
                        </div>
                    );
                })}
            </section>
        </section>
    );
}

export default Playlist;
