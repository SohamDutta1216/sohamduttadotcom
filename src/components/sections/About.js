import React from 'react';
import './Sections.scss'
import SOSlogo from '../../images/logo/SOSlogo.png'
const About = (isInView) => {
    return (
        <section id="about" >
            <div className='about'>
                <div >
                    <div className=' about__row'>
                        <div className=' about__column'>
                            <h1 className='neonText about__header'>WHO ARE WE?</h1>
                            <p className="about__text">We are Sounds Of Spotlight, a movie and music enthusiasts favorite site. Bringing curated entertainment to you daily that you can't find anywhere else. </p>
                        </div>
                        <div className='logo-container'>
                            <img src={SOSlogo} className='main-logo' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;