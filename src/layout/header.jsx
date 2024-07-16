import { Link } from 'react-router-dom';
import MusicPlayer from '../components/musicplayer';
import '../scss/layout/_header.scss';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="link">
                <h1>MADELINE SMITH</h1>
            </Link>

            <MusicPlayer />

            <nav>
                <ul>
                    <li>
                        <Link to="/gallery" className="link">Galerie</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;
