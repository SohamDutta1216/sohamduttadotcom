import React, { useState } from 'react';
import Nav from '../navigation/Nav';
import Avatar from '../../images/icons/night-vision.png';
import "./skills.scss";
import Matrix from '../../images/icons/matrix.gif';
import MatrixBackground from './MatrixBackground';
const Skills = () => {
    const [selectButton, setButton] = useState('Languages')

    return (
        <section className="main-page-wrapper screen-change">
            <MatrixBackground />
            <Nav />
            <div className='skills-card'>
                <img src={Avatar}></img>
                <div className='skills-container'>
                    <div className="skills-buttons">
                        <div className={selectButton == "Languages" ? 'skill-button-pressed' : 'skill-button'}><button onClick={() => setButton('Languages')}><h3>Languages</h3></button></div>
                        <div className={selectButton == "Libraries" ? 'skill-button-pressed' : 'skill-button'}><button onClick={() => setButton('Libraries')}><h3 >Libraries</h3></button></div>
                        <div className={selectButton == "Other Tech" ? 'skill-button-pressed' : 'skill-button'}><button onClick={() => setButton('Other Tech')}><h3 >Tech</h3></button></div>
                    </div>
                    {selectButton === "Languages" &&
                        <div className='skills-column'>
                            <p className='skill-title'>Javascript: 5 years</p>
                            <div class="skill-bar"><div className='five'></div></div>
                            <p className='skill-title'>Typescript: 3.5 years</p>
                            <div class="skill-bar"><div className='threefive'></div></div>
                            <p className='skill-title'>HTML5: 5 years</p>
                            <div class="skill-bar"><div className='five'></div></div>
                            <p className='skill-title'>SCSS/CSS/SASS: 5 years</p>
                            <div class="skill-bar"><div className='five'></div></div>
                            <p className='skill-title'>GraphQL: 4 years</p>
                            <div class="skill-bar"><div className='four'></div></div>
                        </div>
                    }   {selectButton === "Libraries" &&
                        <div className='skills-column'>
                            <p className='skill-title'>React: 5 years</p>
                            <div class="skill-bar"><div className='five'></div></div>
                            <p className='skill-title'>GatsbyJS: 4 years</p>
                            <div class="skill-bar"><div className='four'></div></div>
                            <p className='skill-title'>jQuery: 3.5 years</p>
                            <div class="skill-bar"><div className='threefive'></div></div>
                            <p className='skill-title'>Jest: 3.5 years</p>
                            <div class="skill-bar"><div className='threefive'></div></div>
                        </div>
                    }
                    {selectButton === "Other Tech" &&
                        <div className="skills-row">
                            <div className='skills-column'>
                                <p className='skill-title'>AdobeXD: 3.5 years</p>
                                <div class="skill-bar"><div className='threefive'></div></div>
                                <p className='skill-title'>Headless CMS: 4 years</p>
                                <div class="skill-bar"><div className='four'></div></div>
                                <p className='skill-title'>Gatsby Cloud: 3.5 years</p>
                                <div class="skill-bar"><div className='threefive'></div></div>
                                <p className='skill-title'>Jira: 3.5 years</p>
                                <div class="skill-bar"><div className='threefive'></div></div>
                            </div>
                            <div className='skills-column'>
                                <p className='skill-title'>MongoDB: 2 years</p>
                                <div class="skill-bar"><div className='two'></div></div>
                                <p className='skill-title'>PostgreSQL: 2 years</p>
                                <div class="skill-bar"><div className='two'></div></div>
                                <p className='skill-title'>React Hooks: 4 years</p>
                                <div class="skill-bar"><div className='four'></div></div>
                                <p className='skill-title'>Rest API: 5 years</p>
                                <div class="skill-bar"><div className='five'></div></div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section >
    );
};


export default Skills;