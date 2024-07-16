import React from 'react';
import '../scss/style.scss'
import '../scss/layout/_header.scss';

function Header() {
    return (
        <header className="header">
            <h1> MADELINE SMITH</h1>
                <nav>
                    <ul>
                        <li><a href="#socials"> Galerie </a></li>
                        <li><a href="#contact"> Contact </a></li>
                    </ul>
                </nav>
            </header>
    );
}

export default Header;
