import React from 'react';
import HomeIcon from '../../images/icons/home.gif'
import GitIcon from '../../images/icons/git.gif'
import LinkIcon from '../../images/icons/linked.gif'
import { Link, useLocation } from 'react-router-dom';
const Nav = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname !== "/home" &&
                <div className='icon-wrapper-left'>
                    <Link to='/home'><img className='icon__home' src={HomeIcon}></img></Link>
                </div>
            }
            <div className='icon-wrapper-right'>
                <a href="https://github.com/SohamDutta1216" target="_blank"><img className='icon' src={GitIcon}></img></a>
                <a href="https://www.linkedin.com/in/soham-dutta-ny/" target="_blank"><img className='icon__linked' src={LinkIcon}></img></a>
            </div>
        </>

    );
};


export default Nav;