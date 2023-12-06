import React from 'react';
import MeIcon from '../images/icons/my_character.png'
import { Link } from "react-router-dom";
import Nav from './navigation/Nav';
const Layout = () => {
    return (
        <section className="main-page-wrapper screen-change bg-image">
            <Nav />
            <div className='modal-top'>
                <h1 className='modal-name'>Soham Dutta</h1>
                <img className='icon__me' alt="me" src={MeIcon} />
            </div>
            <div className='modal-bottom'>
                <div className='folder-wrapper'>
                    <Link to='/about'><div className='folder-columns'>
                        <div className='folder' />
                        <p>About</p>
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