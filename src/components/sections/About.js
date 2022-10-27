import React from 'react';
import './Sections.scss'
import Maliha from "../../images/maliha.png"

const About = (isInView) => {
    return (
        <section id="about" >
            <div className='about'>
                <div >
                    <div className=' about__row'>
                        <div className=' about__column'>
                            <h1>ABOUT</h1>
                            <p className="about__text">Hi my name is Maliha, I am a Brooklyn based Interior Decorator. I use my love and eye for mid century and post modern furniture, along with my thrifty nature to create gorgeous spaces for affordable prices. </p>
                        </div>
                        <div className='avatar-container'>
                            <img src={Maliha} className="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;