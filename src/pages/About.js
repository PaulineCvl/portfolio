import React, { useEffect } from 'react';
import { ExternalLink } from 'react-external-link';
import CV from "../assets/images/CV_CHEVROLLIER_Pauline.pdf";

const About = () => {
    const ratio = 0.1;
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-left-visible');
            }
        })
    }

    const handleIntersectRight = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-right-visible');
            }
        })
    }

    const handle75percent = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('skill-1');
            }
        })
    }

    const handle50percent = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('skill-2');
            }
        })
    }

    const handle40percent = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('skill-5');
            }
        })
    }

    const handle30percent = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('skill-3');
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(document.querySelector('.reveal-left'));

        const observerRight = new IntersectionObserver(handleIntersectRight, options);
        observerRight.observe(document.querySelector('.reveal-right'));

        const observer75percent = new IntersectionObserver(handle75percent, options);
        observer75percent.observe(document.querySelector('.percent-75'));

        const observer50percent = new IntersectionObserver(handle50percent, options);
        document.querySelectorAll('.percent-50').forEach(reveal => {
            observer50percent.observe(reveal);
        });

        const observer40percent = new IntersectionObserver(handle40percent, options);
        document.querySelectorAll('.percent-40').forEach(reveal => {
            observer40percent.observe(reveal);
        });

        const observer30percent = new IntersectionObserver(handle30percent, options);
        observer30percent.observe(document.querySelector('.percent-30'));
    }, []);

    return (
        <div id="a-propos" className='about'>
            <div className='about-infos'>
                <div className='reveal-left'>
                    <h2>À propos</h2>
                </div>
                <div className='reveal-right'>
                    <h3>Bienvenue sur mon portfolio !</h3>
                    <p>
                        Je partage ici les différents projets qui m'ont permis d'acquérir et de renforcer mes compétences en <strong>développement web</strong>.
                        Compétences acquises lors de ma formation avec OpenClassrooms, qui a fait suite à mes 5 années d'études en communication.
                    </p>
                    <p>
                        Mon appétence pour le <strong>développement front-end</strong> m'amène à parler en HTML, CSS, JavaScript et React
                        et mon âme de communiquante s'applique à proposer des interfaces attrayantes.
                    </p>
                    <p>
                        Pour en découvrir plus sur mon parcours et mes projets, il suffit de scroller !
                    </p>
                </div>
            </div>
            <div className='skills'>
                <h3>Compétences</h3>
                <div className='skills-percentages'>
                    <div className='percent-75'>
                        <div className='percentage'>
                            <svg>
                                <circle cx="50" cy="50" r="50"></circle>
                            </svg>
                            <p>75<span>%</span></p>
                        </div>
                        <p>HTML / CSS</p>
                    </div>
                    <div className='percent-50'>
                        <div className='percentage'>
                            <svg>
                                <circle cx="50" cy="50" r="50"></circle>
                            </svg>
                            <p>50<span>%</span></p>
                        </div>
                        <p>Javascript</p>
                    </div>
                    <div className='percent-30'>
                        <div className='percentage'>
                            <svg>
                                <circle cx="50" cy="50" r="50"></circle>
                            </svg>
                            <p>30<span>%</span></p>
                        </div>
                        <p>React</p>
                    </div>
                    <div className='percent-50'>
                        <div className='percentage'>
                            <svg>
                                <circle cx="50" cy="50" r="50"></circle>
                            </svg>
                            <p>50<span>%</span></p>
                        </div>
                        <p>Node.js</p>
                    </div>
                    <div className='percent-40'>
                        <div className='percentage'>
                            <svg>
                                <circle cx="50" cy="50" r="50"></circle>
                            </svg>
                            <p>40<span>%</span></p>
                        </div>
                        <p>MySQL</p>
                    </div>
                    <div className='percent-40'>
                        <div className='percentage'>
                            <svg>
                                <circle cx="50" cy="50" r="50"></circle>
                            </svg>
                            <p>40<span>%</span></p>
                        </div>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
            <div className='resume'>
                <button><ExternalLink href={CV}>Voir mon CV</ExternalLink></button>
            </div>
        </div>
    );
};

export default About;