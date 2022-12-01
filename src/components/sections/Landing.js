import React from 'react';

const Landing = (isInView) => {
    return (
        <section id="home" className="main-page-wrapper">
            <div className='line-mobile' />
            <div className='social-wrapper-mobile'><a href="https://www.instagram.com/malihajahangiri/" target="_blank" ><p>IN</p></a><a href="https://www.instagram.com/malihajahangiri/" target="_blank" ><p>IN</p></a></div>
            <div className='line-desktop' />
            <div className='social-wrapper-desktop'><a href="https://www.instagram.com/malihajahangiri/" target="_blank" ><p>IN</p></a><a href="https://www.tiktok.com/@designbymals" target="_blank" ><p>TT</p></a></div>
            <div className=' main-header row center'>
                <div className=' header-info column'>
                    <h3 className="name">MALIHA JAHANGIRI</h3>
                    <br />
                    <p>Interior Decorator</p>
                    <br />
                    <p>Based in Brooklyn, New York</p>
                </div>
                <nav className='menu'>
                    <a href="#work">
                        <h1>WORK</h1>
                    </a>
                    <a href="#about">
                        <h1>ABOUT</h1>
                    </a>
                    <a href="#contact">
                        <h1>CONTACT</h1>
                    </a>
                </nav>
            </div >
        </section>
    );
};

export default Landing;