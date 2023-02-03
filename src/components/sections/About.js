import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval'
import './Sections.scss'
import SOSlogo from '../../images/logo/SOSlogo.png'
import Instagram from '../../images/logo/instagram.js';
import Tiktok from '../../images/logo/tiktok';
const About = (isInView) => {
    const [showButton, setShowButton] = useState(false)
    useInterval(() => {
        if (isInView.isInView === true) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, 20);
    return (

        <section id="about" >
            <div className='up'>
                {showButton &&
                    <>
                        <a href="#home" class="to-top">Back to top</a>
                        <div className='social-wrapper-mobile'><a href="https://www.instagram.com/soundsofspotlight/" target="_blank" ><Instagram /></a><a href="https://www.tiktok.com/@soundsofspotlight" target="_blank" ><Tiktok /></a></div>
                        <div className='social-wrapper-tablet'><a href="https://www.instagram.com/soundsofspotlight/" target="_blank" ><Instagram /></a><a href="https://www.tiktok.com/@soundsofspotlight" target="_blank" ><Tiktok /></a></div>
                    </>
                }
            </div>
            <div className='about'>
                <div >
                    <div className=' about__row'>
                        <div className=' about__column'>
                            <h1 className='neonText about__header'>WHO ARE WE?</h1>
                            <p className="about__text">We are Sounds of Spotlight, a movie and music enthusiasts favorite site. Bringing curated entertainment to you daily that you can't find anywhere else. </p>
                        </div>
                        <div className='logo-container'>
                            <img src={SOSlogo} className='about__logo' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;