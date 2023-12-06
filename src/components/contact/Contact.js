import React from 'react';
import Nav from '../navigation/Nav';
import Nokia from '../../images/icons/artifact.gif'
import './phone.scss'
import Phone from './Phone';
const Contact = () => {

    return (
        <div className='contact-wrapper'>
            <img className="nokia-bg" alt="nokia" src={Nokia}></img>
            <section className="screen-change">
                <Nav />
                <div className='contact'>
                    <Phone />
                </div>
            </section>
        </div>
    );
};


export default Contact;