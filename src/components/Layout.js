import React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import About from './sections/About';
import Landing from './sections/Landing';
import Work from './sections/Work';
import Contact from './sections/Contact'
import { useIsInViewport } from './hooks/useIsInViewport';
import "./root.css"

const Layout = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const isInViewport1 = useIsInViewport(ref1);


    return (
        <div className='container'>
            <Landing />
            <Work isInView={isInViewport1} />
            <div ref={ref1} >
                <About />

                <Contact />
            </div>

        </div>
    );
};


export default Layout;