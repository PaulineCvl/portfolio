import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className='header'>
            <ul>
                <Link to="a-propos" smooth={true} offset={-80}>
                    À propos
                </Link>
                <Link to="realisations" smooth={true} offset={-80}>
                    Réalisations
                </Link>
                <Link to="parcours" smooth={true} offset={-80}>
                    Parcours
                </Link>
                <Link to="contact-me" id="contact" smooth={true} offset={-80}>
                    Contact
                </Link>
            </ul>
        </div>
    );
};

export default Header;