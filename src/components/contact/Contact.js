import React from 'react';
import Nav from '../navigation/Nav';
import { Link } from "react-router-dom";
import Nokia from '../../images/icons/artifact.gif'
import './phone.scss'
import Phone from './Phone';
const Contact = () => {

    return (
        <div className='contact-wrapper'>
            <img className="nokia-bg" src={Nokia}></img>
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