import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import Header from '../components/Header';
import { FaAngleDown } from 'react-icons/fa';
import Banner from '../components/Banner';
import About from './About';
import Projects from './Projects';
import Career from './Career';
import Contact from './Contact';

const Home = () => {
    useEffect(() => {
        const banner = document.querySelector(".banner");
        const header = document.querySelector(".header");
        const bannerHeight = header.getBoundingClientRect().top;
        banner.style.height = bannerHeight + "px";
        let opacity = 1;

        window.addEventListener("scroll", () => {
            const distanceHeaderToTop = header.getBoundingClientRect().top;
            opacity = distanceHeaderToTop / banner.offsetHeight;
            banner.style.opacity = opacity;
        })

        window.addEventListener("resize", () => {
            const bannerHeight = header.getBoundingClientRect().top;
            banner.style.height = bannerHeight + "px";
        })
    }, [])

    return (
        <div className='home'>
            <div className='home-banner'>
                <Banner />
            </div>
            <div className="home-content">
                <div className='home-header'>
                    <Header />
                </div>
                <div className='home-infos'>
                <div className='scroll-down'>
                    <Link to="a-propos" smooth={true} offset={-80}><FaAngleDown /></Link>
                </div>
                <About />
                <Projects />
                <Career />
                <Contact />
                </div>
            </div>
        </div>
    );
};

export default Home;