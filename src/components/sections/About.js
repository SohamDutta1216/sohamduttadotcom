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
                        <a href="#home" class="to-top">back to top</a>
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
                            <p className="about__text">
                                In summary, Sounds of Spotlight is a place to not just find, but really learn about songs, artists, genres, movies, from all different genres and from all over the world, especially ones that deserve more love and recognition.<br /><br /> As someone who's really passionate about all types of music, film, etc., and loves talking about them, I really wanted to find a creative community where anyone wanting that outlet can connect and share that passion or just sit and enjoy, both online and at our in-person events. More details coming soon!

                            </p>
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