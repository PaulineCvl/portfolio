import React, { useEffect } from 'react';
import project1 from '../assets/images/projects/project-1.jpg';
import project2 from '../assets/images/projects/project-2.jpg';
import project3 from '../assets/images/projects/project-3.jpg';
import project4 from '../assets/images/projects/project-4.jpg';
import project5 from '../assets/images/projects/project-5.jpg';
import project6 from '../assets/images/projects/project-6.jpg';
import { FaShareSquare } from 'react-icons/fa';
import { ExternalLink } from 'react-external-link';

const Projects = () => {
    const ratio = 0.1;
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-boxes-visible');
                observer.unobserve(entry.target);
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, options);
        document.querySelectorAll('.reveal-boxes').forEach(reveal => {
            observer.observe(reveal);
        })
    }, []);

    return (
        <div id="realisations" className='achievements'>
            <h2>Réalisations</h2>
            <div className='projects'>
                <div className='project-1 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project1} alt='Intégration HTML/CSS' />
                        <div className='hover-project'>
                            <ExternalLink href='https://github.com/PaulineCvl/Reservia'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                            <ExternalLink href='https://paulinecvl.github.io/Reservia/'><button>Voir le site <FaShareSquare /></button></ExternalLink>
                        </div>
                    </div>
                    <div className='project-description'>
                        <p><span>HTML / CSS</span></p>
                        <p>Intégration graphique</p>
                    </div>
                </div>
                <div className='project-2 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project2} alt='Intégration avec Sass' />
                        <div className='hover-project'>
                            <ExternalLink href='https://github.com/PaulineCvl/Ohmyfood'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                            <ExternalLink href='https://paulinecvl.github.io/Ohmyfood/'><button>Voir le site <FaShareSquare /></button></ExternalLink>
                        </div>
                    </div>
                    <div className='project-description'>
                        <p><span>HTML / CSS</span></p>
                        <p>Intégration et animation du site</p>
                    </div>
                </div>
                <div className='project-3 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project5} alt='Optimisation du référencement naturel du site' />
                        <div className='hover-project'>
                            <ExternalLink href='https://github.com/PaulineCvl/La-chouette-agence'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                        </div>
                    </div>
                    <div className='project-description'>
                        <p><span>HTML / CSS</span></p>
                        <p>Optimisation du référencement naturel du site</p>
                    </div>
                </div>
                <div className='project-4 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project3} alt="Développement d'un site e-commerce" />
                        <div className='hover-project'>
                            <ExternalLink href='https://github.com/PaulineCvl/Kanap'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                        </div>
                    </div>
                    <div className='project-description'>
                        <p><span>JavaScript</span></p>
                        <p>Développement du site e-commerce</p>
                    </div>
                </div>
                <div className='project-5 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project6} alt="Conception de l'API de l'application" />
                        <div className='hover-project'>
                            <ExternalLink href='https://github.com/PaulineCvl/Piiquante'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                        </div>
                    </div>
                    <div className='project-description'>
                        <p><span>Node.js / MongoDB</span></p>
                        <p>Conception de l'API de l'application</p>
                    </div>
                </div>
                <div className='project-6 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project4} alt="Développement d'un réseau social interne d'entreprise avec React et Node.js" />
                        <div className='hover-project'>
                            <ExternalLink href='https://github.com/PaulineCvl/Groupomania'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                            <ExternalLink href='https://www.youtube.com/watch?v=27fHj0-S1aI'><button>Voir la démo du site sur Youtube <FaShareSquare /></button></ExternalLink>
                        </div>
                    </div>
                    <div className='project-description'>
                        <p><span>React / Node.js / MySQL</span></p>
                        <p>Développement du réseau social interne de l'entreprise</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;