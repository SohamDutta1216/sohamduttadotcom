import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval'
import './Sections.scss'
import SOSlogo from '../../images/logo/SOSlogo.png'
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
                {showButton === true && <a href="#home" class="to-top">Back to top</a>
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