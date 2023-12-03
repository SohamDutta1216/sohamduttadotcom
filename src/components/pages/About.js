import React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from '../navigation/Nav';
import MeIcon from '../../images/icons/me.png'
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className='about'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <section className=" screen-change">
                <Nav />
                <div className='about-container'>
                    <img className='about-image' src={MeIcon}></img>
                    <p className='about-content'>
                        I am a Front-End / Web Developer with 3+ years of industry experience working for FieldRoutes and ServiceTitan, as well as freelancing with clients directly to develop their dream websites. Passionate about aesthetics and blending the art of design with programming. Experienced in working with a team to design, develop, test, and deliver pixel perfect and responsive web applications on a deadline. I enjoy solving problems and finding new ways to optimize performance.
                    </p>
                </div>
            </section>
        </div>
    );
};


export default About;