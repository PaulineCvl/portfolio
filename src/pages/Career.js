import React, { useEffect } from 'react';

const Career = () => {
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
                observer.unobserve(entry.target);
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, options);
        document.querySelectorAll('.reveal-left').forEach(reveal => {
            observer.observe(reveal);
        })
    }, []);

    return (
        <div id="parcours" className='career'>
            <h2>Parcours</h2>
            <div className='qualifications'>
                <div className='qualification-1 reveal-left'>
                    <p className='qualification-date'>2017</p>
                    <p>Obtention de mon BTS Communication</p>
                </div>
                <div className='qualification-2 reveal-left'>
                    <p className='qualification-date'>2018</p>
                    <p>Obtention de ma Licence Information et Communication</p>
                </div>
                <div className='qualification-3 reveal-left'>
                    <p className='qualification-date'>2020</p>
                    <p>Obtention de mon Master Stratégie d'Innovation et Communication</p>
                </div>
                <div className='qualification-4 reveal-left'>
                    <p className='qualification-date'>2022</p>
                    <p id='developper'>Obtention de mon diplôme de développeuse web</p>
                </div>
            </div>
        </div>
    );
};

export default Career;