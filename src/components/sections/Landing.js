import React from 'react';
import Instagram from '../../images/logo/instagram.js';
import Tiktok from '../../images/logo/tiktok';
import LGinstagram from '../../images/logo/lginstagram.js';
import LGtiktok from '../../images/logo/lgtiktok';
import SOSlogo from '../../images/logo/SOSlogo.png'

const Landing = (isInView) => {
    return (
        <section id="home" className="main-page-wrapper">
            <div className='line-mobile' />
            <div className=' main-header row center'>
                <div className='column'>
                    <img src={SOSlogo} className='main-logo' />
                    <h1 className='neonText' >SOUNDS OF SPOTLIGHT</h1>
                </div>
                <nav className='menu'>
                    <a href="#about">
                        <h1>WHAT IS SOS?</h1>
                    </a>
                    <a href="#work">
                        <h1>SPOTLIGHTS</h1>
                    </a>
                    <a href="#contact">
                        <h1>CONTACT US</h1>
                    </a>
                    <div className='social-wrapper'><a href="https://www.instagram.com/soundsofspotlight/" target="_blank" ><LGinstagram /></a><a href="https://www.tiktok.com/@kodak.lik" target="_blank" ><LGtiktok /></a></div>
                </nav>
            </div >
        </section>
    );
};

export default Landing;