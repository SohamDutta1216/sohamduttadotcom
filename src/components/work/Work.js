import React, { useState, useEffect } from 'react';
import VintageBG from '../../images/icons/vintage-bg.png'
import Windows from '../../images/icons/windows.png'
import './work.scss'
import Jobs from '../../images/icons/jobs.png'
import Resume from '../../images/icons/resume.png'
import Projects from '../../images/icons/projects.png'
import Home from '../../images/icons/home.png'
import { Link } from 'react-router-dom';
import Modal from './modal/Modal';
import Div100vh from 'react-div-100vh';
import PDF from '../../images/icons/ResumeSoftware.pdf'
const Work = () => {
    var [date, setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });
    var formattedTime = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    const [click, setClick] = useState('')
    const [size, setSize] = useState(false)
    return (
        <div>
            <Div100vh>
                <img className="vintage-bg" src={VintageBG}></img>
                <section className="screen-change">
                    <p className='work'>
                        <div className='work-column'>
                            <div className='windows-screen'>
                                <div className='windows-column'>
                                    <Link to='/home'><div className='windows-icon'>
                                        <img src={Home} />
                                        <p>Home</p>
                                    </div></Link>
                                    <div onClick={() => setClick('Jobs')} className='windows-icon'>
                                        <img src={Jobs} />
                                        <p>Work Experience</p>
                                    </div>
                                    <a className='windows-icon' href={PDF} target="_blank">
                                        <img src={Resume} />
                                        <p>Resume</p>
                                    </a>
                                    <div onClick={() => setClick('Projects')} className='windows-icon'>
                                        <img src={Projects} />
                                        <p>Projects</p>
                                    </div>
                                </div>
                                {click !== '' &&
                                    <Modal setClick={setClick} click={click} setSize={setSize} size={size} />
                                }

                            </div>
                            <div className='work-bar'>
                                <div className='work-start'>
                                    <button className='windows-logo'><img src={Windows} /><p>Start</p></button>
                                    <div className='windows-time'>{formattedTime}</div>

                                </div>
                            </div>
                        </div>
                    </p>
                </section>
            </Div100vh>
        </div >

    );
};


export default Work;