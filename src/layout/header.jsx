import { Link } from 'react-router-dom';
import '../scss/style.scss'
import '../scss/layout/_header.scss';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="link">
                <h1> MADELINE SMITH </h1>
            </Link>

            <nav>
                <ul>
                    <li><Link to="/gallery" className="link">Galerie</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
