import React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import About from './sections/About';
import Landing from './sections/Landing';
import Spotlights from './sections/Spotlights';
import Contact from './sections/Contact'
import { useIsInViewport } from './hooks/useIsInViewport';
import "./root.css"


const Layout = ({ spotLightsData }) => {
    const ref1 = useRef(null);
    const isInViewport1 = useIsInViewport(ref1);

    return (
        <div className='container'>
            <Landing />
            <About isInView={isInViewport1} />
            <div ref={ref1} >
                <Spotlights spotLightsData={spotLightsData} />
                <Contact />
            </div>
        </div>
    );
};


export default Layout;