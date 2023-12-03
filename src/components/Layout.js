import React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import MeIcon from '../images/icons/me.png'
import { Outlet, Link } from "react-router-dom";
import Nav from './navigation/Nav';
const Layout = ({ spotLightsData }) => {
    return (
        <section className="main-page-wrapper screen-change bg-image">
            <Nav />
            <div className='modal-top'>
                <h1 className='modal-name'>Soham Dutta</h1>
                <img className='icon__me' src={MeIcon} />
            </div>
            <div className='modal-bottom'>
                <div className='folder-wrapper'>
                    <Link to='/about'><div className='folder-columns'>
                        <div className='folder' />
                        <p>About Me</p>
                    </div></Link>
                    <Link to='/work'><div className='folder-columns'>
                        <div className='folder' />
                        <p>Work</p>
                    </div>
                    </Link>
                    <Link to='/skills'><div className='folder-columns'>
                        <div className='folder' />
                        <p>Skills</p>
                    </div>
                    </Link>
                    <Link to='/contact'><div className='folder-columns'>
                        <div className='folder' />
                        <p>Contact</p>
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};


export default Layout;