import React from 'react';
import logoJS from '../assets/images/logos/JavaScript.png';
import logoReact from '../assets/images/logos/React.png';
import logoNode from '../assets/images/logos/NodeJS.png';
import logoMongoDB from '../assets/images/logos/MongoDB.png';
import logoMySQL from '../assets/images/logos/MySQL.png';

const Skills = () => {
    return (
        <div className='skills'>
            <h2>Compétences</h2>
            <h3>Développement web :</h3>
            <ul>
                <li>
                    <div className='skills-logo'>
                        <img src={logoJS} alt='logo JavaScript' />
                    </div>
                    <p>JavaScript</p>
                </li>
                <li>
                    <div className='skills-logo'>
                        <img src={logoReact} alt='logo React' id='logo-react' />
                    </div>
                    <p>React</p>
                </li>
                <li>
                    <div className='skills-logo'>
                        <img src={logoNode} alt='logo NodeJS' />
                    </div>
                    <p>Node.js</p>
                </li>
                <li>
                    <div className='skills-logo'>
                        <img src={logoMongoDB} alt='logo MongoDB' />
                    </div>
                    <p>MongoDB</p>
                </li>
                <li>
                    <div className='skills-logo'>
                        <img src={logoMySQL} alt='logo MySQL' />
                    </div>
                    <p>MySQL</p>
                </li>
            </ul>
            <h3>PAO :</h3>
            <ul>
                <li>
                    <p>InDesign</p>
                </li>
                <li>
                    <p>Photoshop</p>
                </li>
                <li>
                    <p>Illustrator</p>
                </li>
            </ul>
        </div>
    );
};

export default Skills;