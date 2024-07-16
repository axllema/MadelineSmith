// import * as React from 'react';
// import { Link } from "react-router-dom"
import '../scss/layout/_footer.scss';
import '../scss/style.scss';

function Footer() {
    return (
        <nav className="footer">
            <div className="footer-items">
                <p className="footer-items-text"> <span className="footer-items-text-span"> © </span> axpostrophe - Tous droits réservés - 2024. </p>
            </div>
        </nav>
    );
}

export default Footer;