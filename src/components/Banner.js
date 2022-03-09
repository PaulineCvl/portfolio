import React from 'react';
import linkedin from '../assets/images/logos/LinkedIn.png';
import github from '../assets/images/logos/GitHub.png';
import profilePicture from '../assets/images/profile-picture.png';
import { ExternalLink } from 'react-external-link';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-image'>
                <img src={profilePicture} alt='Pauline Chevrollier' />
            </div>
            <div className='banner-infos'>
                <h1>Pauline CHEVROLLIER</h1>
                <p>Développeuse web</p>
                <div className='banner-infos__contact'>
                    <ExternalLink href="https://www.linkedin.com/in/pauline-chevrollier/"><img src={linkedin} alt="lien vers mon profil LinkedIn" /></ExternalLink>
                    <ExternalLink href="https://github.com/PaulineCvl"><img src={github} alt="lien vers mon profil GitHub" /></ExternalLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;