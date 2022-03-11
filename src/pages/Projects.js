import React, { useEffect, useState } from 'react';
import project1 from '../assets/images/projects/project-1.jpg';
import project2 from '../assets/images/projects/project-2.jpg';
import project3 from '../assets/images/projects/project-3.jpg';
import project4 from '../assets/images/projects/project-4.jpg';
import project5 from '../assets/images/projects/project-5.jpg';
import project6 from '../assets/images/projects/project-6.jpg';
import { FaShareSquare, FaMinus, FaPlus } from 'react-icons/fa';
import { ExternalLink } from 'react-external-link';

const Projects = () => {
    const [visible1, setVisible1] = useState();
    const [visible2, setVisible2] = useState();
    const [visible3, setVisible3] = useState();
    const [visible4, setVisible4] = useState();
    const [visible5, setVisible5] = useState();
    const [visible6, setVisible6] = useState();

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
                        {visible1 ? (
                            <div className='hover-project--visible'>
                                <ExternalLink href='https://github.com/PaulineCvl/Reservia'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                                <ExternalLink href='https://paulinecvl.github.io/Reservia/'><button>Voir le site <FaShareSquare /></button></ExternalLink>
                            </div>
                        ) : (
                            <div className='hover-project'>
                                <ExternalLink href='https://github.com/PaulineCvl/Reservia'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                                <ExternalLink href='https://paulinecvl.github.io/Reservia/'><button>Voir le site <FaShareSquare /></button></ExternalLink>
                            </div>
                        )}
                    </div>
                    <div className='project-description'>
                        <p><span>HTML / CSS</span></p>
                        <p>Intégration graphique</p>
                        {visible1 ? (
                            <button onClick={() => setVisible1(false)}><FaMinus /></button>
                        ) : (
                            <button onClick={() => setVisible1(true)}><FaPlus /></button>
                        )}
                    </div>
                </div>
                <div className='project-2 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project2} alt='Intégration avec Sass' />
                        {visible2 ? (
                            <div className='hover-project--visible'>
                                <ExternalLink href='https://github.com/PaulineCvl/Ohmyfood'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                                <ExternalLink href='https://paulinecvl.github.io/Ohmyfood/'><button>Voir le site <FaShareSquare /></button></ExternalLink>
                            </div>
                        ) : (
                            <div className='hover-project'>
                                <ExternalLink href='https://github.com/PaulineCvl/Ohmyfood'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                                <ExternalLink href='https://paulinecvl.github.io/Ohmyfood/'><button>Voir le site <FaShareSquare /></button></ExternalLink>
                            </div>
                        )}
                    </div>
                    <div className='project-description'>
                        <p><span>HTML / CSS</span></p>
                        <p>Intégration et animation du site</p>
                        {visible2 ? (
                            <button onClick={() => setVisible2(false)}><FaMinus /></button>
                        ) : (
                            <button onClick={() => setVisible2(true)}><FaPlus /></button>
                        )}
                    </div>
                </div>
                <div className='project-3 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project5} alt='Optimisation du référencement naturel du site' />
                        {visible3 ? (
                            <div className='hover-project--visible'>
                                <ExternalLink href='https://github.com/PaulineCvl/La-chouette-agence'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                            </div>
                        ) : (
                            <div className='hover-project'>
                                <ExternalLink href='https://github.com/PaulineCvl/La-chouette-agence'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                            </div>
                        )}
                    </div>
                    <div className='project-description'>
                        <p><span>HTML / CSS</span></p>
                        <p>Optimisation du référencement naturel du site</p>
                        {visible3 ? (
                            <button onClick={() => setVisible3(false)}><FaMinus /></button>
                        ) : (
                            <button onClick={() => setVisible3(true)}><FaPlus /></button>
                        )}
                    </div>
                </div>
                <div className='project-4 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project3} alt="Développement d'un site e-commerce" />
                        {visible4 ? (
                            <div className='hover-project--visible'>
                                <ExternalLink href='https://github.com/PaulineCvl/Kanap'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                            </div>
                        ) : (
                            <div className='hover-project'>
                                <ExternalLink href='https://github.com/PaulineCvl/Kanap'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                            </div>
                        )}
                    </div>
                    <div className='project-description'>
                        <p><span>JavaScript</span></p>
                        <p>Développement du site e-commerce</p>
                        {visible4 ? (
                            <button onClick={() => setVisible4(false)}><FaMinus /></button>
                        ) : (
                            <button onClick={() => setVisible4(true)}><FaPlus /></button>
                        )}
                    </div>
                </div>
                <div className='project-5 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project6} alt="Conception de l'API de l'application" />
                        {visible5 ? (
                            <div className='hover-project--visible'>
                                <ExternalLink href='https://github.com/PaulineCvl/Piiquante'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                            </div>
                        ) : (
                            <div className='hover-project'>
                                <ExternalLink href='https://github.com/PaulineCvl/Piiquante'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                            </div>
                        )}
                    </div>
                    <div className='project-description'>
                        <p><span>Node.js / MongoDB</span></p>
                        <p>Conception de l'API de l'application</p>
                        {visible5 ? (
                            <button onClick={() => setVisible5(false)}><FaMinus /></button>
                        ) : (
                            <button onClick={() => setVisible5(true)}><FaPlus /></button>
                        )}
                    </div>
                </div>
                <div className='project-6 reveal-boxes'>
                    <div className='project-image'>
                        <img src={project4} alt="Développement d'un réseau social interne d'entreprise avec React et Node.js" />
                        {visible6 ? (
                            <div className='hover-project--visible'>
                                <ExternalLink href='https://github.com/PaulineCvl/Groupomania'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                                <ExternalLink href='https://www.youtube.com/watch?v=27fHj0-S1aI'><button>Voir la démo du site sur Youtube <FaShareSquare /></button></ExternalLink>
                            </div>
                        ) : (
                            <div className='hover-project'>
                                <ExternalLink href='https://github.com/PaulineCvl/Groupomania'><button className='github-project'>Voir le projet sur GitHub <FaShareSquare /></button></ExternalLink>
                                <ExternalLink href='https://www.youtube.com/watch?v=27fHj0-S1aI'><button>Voir la démo du site sur Youtube <FaShareSquare /></button></ExternalLink>
                            </div>
                        )}
                    </div>
                    <div className='project-description'>
                        <p><span>React / Node.js / MySQL</span></p>
                        <p>Développement du réseau social interne de l'entreprise</p>
                        {visible6 ? (
                            <button onClick={() => setVisible6(false)}><FaMinus /></button>
                        ) : (
                            <button onClick={() => setVisible6(true)}><FaPlus /></button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;