import React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import HomeIcon from '../images/icons/home.gif'
import GitIcon from '../images/icons/git.gif'
import LinkIcon from '../images/icons/linked.gif'
import MeIcon from '../images/icons/me.png'
import FolderClosed from '../images/icons/folder-closed.png'
import FolderOpen from '../images/icons/folder-open.png'
import { useHover } from "@uidotdev/usehooks";
import { Outlet, Link } from "react-router-dom";

const Layout = ({ spotLightsData }) => {
    const [ref, hovering] = useHover();
    return (
        <section className="main-page-wrapper screen-change bg-image">
            <div className='icon-wrapper-left'>
                <a href=""><img className='icon__home' src={HomeIcon}></img></a>
            </div>
            <div className='icon-wrapper-right'>
                <a href="https://github.com/SohamDutta1216" target="_blank"><img className='icon' src={GitIcon}></img></a>
                <a href="https://www.linkedin.com/in/soham-dutta-ny/" target="_blank"><img className='icon__linked' src={LinkIcon}></img></a>
            </div>
            <div className='modal-top'>
                <h1 className='modal-name'>Soham Dutta</h1>
                <img className='icon__me' src={MeIcon} />
            </div>
            <div className='modal-bottom'>
                <div className='folder-wrapper'>
                    <div className='folder-columns'>
                        <div className='folder' />
                        <p>About Me</p>
                    </div>
                    <div className='folder-columns'>
                        <div className='folder' />
                        <p>Work</p>
                    </div>
                    <div className='folder-columns'>
                        <div className='folder' />
                        <p>Skills</p>
                    </div>
                    <div className='folder-columns'>
                        <div className='folder' />
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Layout;