import React from 'react';
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
import GH from '../../../images/icons/github.png'
import SOS from '../../../images/projects/SOS.png'
import Maliha from '../../../images/projects/maliha.png'
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
                <div className='project-section'>
                    <div className='project-image'>
                        <img style={{ borderRadius: '1rem' }} src={SOS}></img>
                    </div>
                    <div className='project-description'>
                        <h3>Sounds Of Spotlight
                        </h3>
                        <p>A website comissioned by a brooklyn collective based around music and events</p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Javascript , React, SCSS,  Headless CMS : Contentful</p>
                        <div className="project-links">
                            <a target="_blank" rel="noreferrer" href="https://github.com/SohamDutta1216/SoundsOfSpotlight"><img src={GH}></img></a>
                            <a className="visit" href="https://soundsofspotlight.com/" target="_blank" rel="noreferrer">Visit Site &gt;</a>
                        </div>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img style={{ borderRadius: '1rem' }} src={Maliha}></img>
                    </div>
                    <div className='project-description'>
                        <h3>Maliha Jahangiri Interiors
                        </h3>
                        <p>A website comissioned by a brooklyn interior designer</p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Javascript , React, SCSS,  Headless CMS : Contentful</p>
                        <div className="project-links">
                            <a target="_blank" rel="noreferrer" href="https://github.com/SohamDutta1216/maliha-portfolio"><img src={GH}></img></a>
                            <a className="visit" href="https://www.malihajahangiri.com/" target="_blank" rel="noreferrer">Visit Site &gt;</a>
                        </div>
                    </div>
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
                        <h3>Cryptocurrency Data Feed
                        </h3>
                        <p>A dark mode clone of the chain link home page made for a front end interview to stand out from other candidates. This application shows all cryptocurrencies along with a graph displaying their price changes over various time periods</p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Javascript , Chart.js, CoinGecko API</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/SohamDutta1216/feedclone"><img src={GH}></img></a>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={CryptoCreeper}></img>
                    </div>
                    <div className='project-description'>
                        <h3>CryptoCreeper</h3>
                        <p>Full stack web application that uses the coingecko API to retrieve all available coins and lets users track their investments and portfolio</p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Javascript , React , Redux , Express , Node , Mongoose , MongoDB , Bcrypt , JSONwebtoken , Semantic UI , Google OAUTH , CoinGecko API</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/SohamDutta1216/cryptoCreeper"><img src={GH}></img></a>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Demon}></img>
                    </div>
                    <div className='project-description'>
                        <h3>Demon Dash</h3>
                        <p>Online multiplayer game built with a team of 4, using Agile Methodologies</p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Javascript, Phaser3, SocketIO</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/2004-fsa-team-jiraiya/Gammiee"><img src={GH}></img></a>

                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Lex}></img>
                    </div>
                    <div className='project-description'>
                        <h3>Free Lance Project - LexMediaProjects</h3>
                        <p>Website comissioned for a small business</p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Wordpress , PHP , CSS</p>
                        <a className="visit" href="https://lexmediaprojects.com/" target="_blank" rel="noreferrer">Visit Site &gt;</a>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Shop}></img>
                    </div>
                    <div className='project-description'>
                        <h3>Movie Search Home Page</h3>
                        <p>Responsive webpage that can search the OMDB api for movies, and allow the user to save their favourite films they feel should be up for nomination. Built in 3 days for a code challenge using custom CSS / Styled-components for animations and components.
                        </p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Javascript , React , styled-components , CSS , Axios
                        </p>
                        <a target="_blank" href="https://github.com/SohamDutta1216/The-Shoppies"><img src={GH}></img></a>

                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Idention}></img>
                    </div>
                    <div className='project-description'>
                        <h3>Identicon Generator</h3>
                        <p>An identicon generator</p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Elixer, Erlang</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/SohamDutta1216/IdenticonGenerator/blob/master/README.md"><img src={GH}></img></a>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Sneaker}></img>
                    </div>
                    <div className='project-description'>
                        <h3>Sneaker Shopper</h3>
                        <p>Full stack E-Commerce sneaker store built with a team of 4, using Agile Methodologies
                        </p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            React , Redux , Node , Express , Sequelize , Postgres , Mocha/Chai , Semantic UI , Bootstrap</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Team-gs-Naruto/Grace-Shopper"><img src={GH}></img></a>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Tandem}></img>
                    </div>
                    <div className='project-description'>
                        <h3>Tandem Code Challenge</h3>
                        <p>Tandem Front-End React Code challenge that displays trivia questions with multiple-choice answers to select from</p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Javascript, React, Semantic UI , Enzyme/Jest</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/SohamDutta1216/tandemApprentice"><img src={GH}></img></a>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Sleep}></img>
                    </div>
                    <div className='project-description'>
                        <h3>Sleep Visualizer</h3>
                        <p>Web Application built in a pair that allows user to compare REM sleep with daily habits to find correlations and chart them</p>
                        <p>𝗧𝗲𝗰𝗵 𝗨𝘀𝗲𝗱 :
                            Javascript , React , Chart.JS , Express , Sequelize , Node , PostgreSQL</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Oura-ring-tag-visualizer/sleepVisualizer"><img src={GH}></img></a>
                    </div>
                </div>
                <h3>Publications</h3>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Linked}></img>
                    </div>
                    <div className='project-description'>
                        <p>A low level explanation of linked-lists using creative and beginner friendly teaching methods</p>
                        <a className="visit" href="https://blog.devgenius.io/linked-lists-for-absolute-dummies-2fa10f752c" target="_blank" rel="noreferrer">Read &gt;</a>

                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-image'>
                        <img src={Adhd}></img>
                    </div>
                    <div className='project-description'>
                        <p>Personal experience with overcoming ADHD while learning to code, giving insight on bio-hacking techniques to optimize learning</p>
                        <a className="visit" href="https://blog.devgenius.io/adhd-and-code-17c5e1d0ca1b?gi=7b8ae553296a" target="_blank" rel="noreferrer">Read &gt;</a>

                    </div>
                </div>
            </div>

        </div>

    );
};


export default Projects;