import React, { useState } from 'react';
import Nav from '../navigation/Nav';
import Avatar from '../../images/icons/my_character.png'
const Skills = () => {
    const [selectButton, setButton] = useState('Languages')
    return (
        <section className="main-page-wrapper screen-change bg-image">
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
                            <p className='skill-title'>Javascript</p>
                            <div class="skill-bar"><div className='five'>5 years</div></div>
                            <p className='skill-title'>Typescript</p>
                            <div class="skill-bar"><div className='threefive'>3.5 years</div></div>
                            <p className='skill-title'>HTML5</p>
                            <div class="skill-bar"><div className='five'>5 years</div></div>
                            <p className='skill-title'>SCSS/CSS/SASS</p>
                            <div class="skill-bar"><div className='five'>5 years</div></div>
                            <p className='skill-title'>GraphQL</p>
                            <div class="skill-bar"><div className='four'>4 years</div></div>
                        </div>
                    }   {selectButton === "Libraries" &&
                        <div className='skills-column'>
                            <p className='skill-title'>React</p>
                            <div class="skill-bar"><div className='five'>5 years</div></div>
                            <p className='skill-title'>GatsbyJS</p>
                            <div class="skill-bar"><div className='four'>4 years</div></div>
                            <p className='skill-title'>jQuery</p>
                            <div class="skill-bar"><div className='threefive'>3.5 years</div></div>
                            <p className='skill-title'>Jest</p>
                            <div class="skill-bar"><div className='threefive'>3.5 years</div></div>
                        </div>
                    }
                    {selectButton === "Other Tech" &&
                        <div className="skills-row">
                            <div className='skills-column'>
                                <p className='skill-title'>AdobeXD</p>
                                <div class="skill-bar"><div className='threefive'>3.5 years</div></div>
                                <p className='skill-title'>Headless CMS</p>
                                <div class="skill-bar"><div className='four'>4 years</div></div>
                                <p className='skill-title'>Gatsby Cloud</p>
                                <div class="skill-bar"><div className='threefive'>3.5 years</div></div>
                                <p className='skill-title'>Jira</p>
                                <div class="skill-bar"><div className='threefive'>3.5 years</div></div>
                            </div>
                            <div className='skills-column'>
                                <p className='skill-title'>MongoDB</p>
                                <div class="skill-bar"><div className='two'>2 years</div></div>
                                <p className='skill-title'>PostgreSQL</p>
                                <div class="skill-bar"><div className='two'>2 years</div></div>
                                <p className='skill-title'>React Hooks</p>
                                <div class="skill-bar"><div className='four'>4 years</div></div>
                                <p className='skill-title'>Rest API</p>
                                <div class="skill-bar"><div className='five'>5 years</div></div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section >
    );
};


export default Skills;