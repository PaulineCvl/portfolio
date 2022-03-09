import React, { useEffect } from 'react';
import { ExternalLink } from 'react-external-link';
import { animateScroll as scroll } from 'react-scroll';
import linkedin from '../assets/images/logos/linkedin-grey.png';
import github from '../assets/images/logos/github-grey.png';
import { FaEnvelope, FaAngleUp } from 'react-icons/fa';

const Contact = () => {
    const ratio = 0.1;
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const handleSquareAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('square');
            }
        })
    }

    useEffect(() => {
        const observerSquare1 = new IntersectionObserver(handleSquareAnimation, options);
        observerSquare1.observe(document.querySelector('.linkedin'));

        const observerSquare2 = new IntersectionObserver(handleSquareAnimation, options);
        observerSquare2.observe(document.querySelector('.github'));

        const observerSquare3 = new IntersectionObserver(handleSquareAnimation, options);
        observerSquare3.observe(document.querySelector('.email'));
    }, []);

    return (
        <div id="contact-me" className='contact'>
            <div className='scrollToTop'>
                <button onClick={scrollToTop}><FaAngleUp /></button>
            </div>
            <h2>Contact</h2>
            <div className='contact-links'>
                <div className='linkedin'>
                    <ExternalLink href="https://www.linkedin.com/in/pauline-chevrollier/"><img src={linkedin} alt="lien vers mon profil LinkedIn" /></ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/in/pauline-chevrollier/" className='contact-1' >linkedin.com/in/pauline-chevrollier</ExternalLink>
                </div>
                <div className='github square-2'>
                    <ExternalLink href="https://github.com/PaulineCvl"><img src={github} alt="lien vers mon profil GitHub" /></ExternalLink>
                    <ExternalLink href="https://github.com/PaulineCvl" className='contact-2' >github.com/PaulineCvl</ExternalLink>
                </div>
                <div className='email'>
                    <ExternalLink href="mailto:pauline.chevrollier@gmail.com"><FaEnvelope /></ExternalLink>
                    <ExternalLink href="mailto:pauline.chevrollier@gmail.com" className='contact-3' >pauline.chevrollier@gmail.com</ExternalLink>
                </div>
            </div>
        </div>
    );
};

export default Contact;