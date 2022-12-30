import React from 'react';
import Instagram from '../../images/logo/instagram.js';
import Tiktok from '../../images/logo/tiktok';
import SOSlogo from '../../images/logo/SOSlogo.png'

const Landing = (isInView) => {
    return (
        <section id="home" className="main-page-wrapper">
            <div className='line-mobile' />
            <div className='social-wrapper-mobile'><a href="https://www.instagram.com/soundsofspotlight/" target="_blank" ><Instagram /></a><a href="https://www.tiktok.com/@kodak.lik" target="_blank" ><Tiktok /></a></div>

            <div className='social-wrapper-tablet'><a href="https://www.instagram.com/soundsofspotlight/" target="_blank" ><Instagram /></a><a href="https://www.tiktok.com/@kodak.lik" target="_blank" ><Tiktok /></a></div>
            <div className=' main-header row center'>
                <div className='column'>
                    <img src={SOSlogo} className='main-logo' />
                    <h1 className='neonText' >SOUNDS <br />OF <br />SPOTLIGHT</h1>
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
                </nav>
            </div >
        </section>
    );
};

export default Landing;