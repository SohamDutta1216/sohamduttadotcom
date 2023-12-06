import React from 'react';
import Nav from '../navigation/Nav';
const About = () => {
    return (
        <div className='about'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <section className=" screen-change">
                <Nav />
                <div className='about-container'>
                    <div className='about-content'>
                        <h2>Hi ! My name is Soham</h2>
                        <p>I am a Front-End / Web Developer with 3+ years of industry experience working for FieldRoutes and ServiceTitan, as well as freelancing with clients directly to develop their dream websites. Passionate about aesthetics and blending the art of design with programming. Experienced in working with a team to design, develop, test, and deliver pixel perfect and responsive web applications on a deadline. I enjoy solving problems and finding new ways to optimize performance.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default About;