// import songImage1 from '../assets/images/song1.jpg';
// import songImage2 from '../assets/images/song2.jpg';
// import songImage3 from '../assets/images/song3.jpg';
// import songImage4 from '../assets/images/song4.jpg';
// import songImage5 from '../assets/images/song5.jpg';
// import songImage6 from '../assets/images/song6.jpg';
import '../scss/components/_playlist.scss';

function Playlist() {
    const colors = [
        { color: '#E0E1DD', label: '࣭ ⭑ཐིཋྀ Sue Me - Sabrina Carpenter ཐིཋ๋ྀ࣭ ⭑' },
        { color: '#D1CAC4', label: '｡ﾟ𖤓 ﾟ Gimme! Gimme! Gimme! - ABBA ｡ﾟ𖤓 ﾟ' },
        { color: '#B3ADA4', label: '˚⋆ᡣ𐭩 Off To The Races - Lana Del Rey ᡣ𐭩˚⋆' },
        { color: '#E7E1DA', label: '✮⋆˙ The Chain - Fletwood Mac ✮⋆˙' },
        { color: '#DCCDBF', label: '༘ ೀ Water - Tyla  ༘ ೀ' },
        { color: '#B4A09B', label: '˖°𓇼 Hailee Steinfeld - Coast 𓇼°˖' },
    ];

    return (
        <section className="playlist" id="playlist">
            <h1 className='playlist-title'> Playlist </h1>

            <section className="playlist-wrap" id="playlist-wrap">
            {colors.map((item, index) => (
                <div className="playlist-item" key={index}>
                    <div className="color-box" style={{ backgroundColor: item.color }}></div>
                    <p>{item.label}</p>
                </div>
            ))}
            </section>

        </section>
    );
}

export default Playlist;
