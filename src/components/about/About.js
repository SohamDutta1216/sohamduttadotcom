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
                        <h2>Hi! My name is Soham,</h2>
                        <br />
                        <p>I am a Front End / Web Developer with 3+ years of experience. Experienced in working with a team to design, develop, test, and deliver pixel perfect and responsive web applications on a deadline. I enjoy mixing the art of design with code and creating something beautiful and unique.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default About;