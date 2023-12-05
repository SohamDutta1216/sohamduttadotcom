import React, { useState, useEffect } from 'react';
import '../work.scss'
import ChainLink from '../../../images/projects/chainlink.png'
import CryptoCreeper from '../../../images/projects/crypto.png'
import Adhd from '../../../images/projects/adhd.png'
import Demon from '../../../images/projects/demon.png'
import Idention from '../../../images/projects/identicon.png'
import Lex from '../../../images/projects/lex.png'
import Linked from '../../../images/projects/linked.png'
import Shop from '../../../images/projects/moviesearch.png'
import Sleep from '../../../images/projects/sleep.png'
import Sneaker from '../../../images/projects/sneaker.png'
import Tandem from '../../../images/projects/tandem.png'


const Projects = () => {



    return (
        <div className="projects">
            <div className='project-title' >
                <h3>Projects</h3>
            </div>
            <div className='projects-column'>
                <div className='projects-title'>
                    <h3>New Projects</h3>
                    <h4>Newer projects after or during my 3+ years of employment and experience</h4>
                </div>
                <div className='projects-title'>
                    <h3>Old Projects</h3>
                    <h4>Projects done in the beginning of my coding journey</h4>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={ChainLink}></img>
                    </div>
                    <div className='project-description'>
                        <p>A dark mode clone of the https://data.chain.link home page made for a front end interview to stand out from other candidates. This application shows all cryptocurrencies along with a graph displaying their price changes over various time periods</p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={CryptoCreeper}></img>
                    </div>
                    <div className='project-description'>
                        <p>Full stack web application that uses the coingecko API to retrieve all available coins and lets users track their investments and portfolio</p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Demon}></img>
                    </div>
                    <div className='project-description'>
                        <p>Online multiplayer game built with a team of 4, using Agile Methodologies</p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Lex}></img>
                    </div>
                    <div className='project-description'>
                        <p>Website comissioned for a small business</p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Shop}></img>
                    </div>
                    <div className='project-description'>
                        <p>Responsive webpage that can search the OMDB api for movies, and allow the user to save their favourite films they feel should be up for nomination. Built in 3 days for a code challenge using custom CSS / Styled-components for animations and components.
                        </p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Idention}></img>
                    </div>
                    <div className='project-description'>
                        <p>An identicon generator</p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Sneaker}></img>
                    </div>
                    <div className='project-description'>
                        <p>Full stack E-Commerce sneaker store built with a team of 4, using Agile Methodologies
                        </p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Tandem}></img>
                    </div>
                    <div className='project-description'>
                        <p>Tandem Front-End React Code challenge that displays trivia questions with multiple-choice answers to select from</p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Sleep}></img>
                    </div>
                    <div className='project-description'>
                        <p>Web Application built in a pair that allows user to compare REM sleep with daily habits to find correlations and chart them</p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Linked}></img>
                    </div>
                    <div className='project-description'>
                        <p>A low level explanation of linked-lists using creative and beginner friendly teaching methods</p>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Adhd}></img>
                    </div>
                    <div className='project-description'>
                        <p>Personal experience with overcoming ADHD while learning to code, giving insight on bio-hacking techniques to optimize learning</p>
                    </div>
                </div>
            </div>

        </div>

    );
};


export default Projects;