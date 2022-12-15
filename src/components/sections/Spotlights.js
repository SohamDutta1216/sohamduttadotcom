import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval'
import ImageGallery from '../image-gallery/ImageGallery';

const Spotlights = () => {

    return (
        <section id="work" className='spotlights'>
            <h1 className='neonText spotlight-header' >SPOTLIGHTS</h1>
            <ImageGallery />

        </section>
    );
};

export default Spotlights;