import React from 'react';
import '../styles/Footer.scss';


const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer__copyright">© 2022 Magali Fabri</span>

            <a className="footer__link"
               href="https://github.com/magalifabri/portfolio"
            >
                View source code on GitHub
            </a>
        </footer>
    );
};

export default Footer;
