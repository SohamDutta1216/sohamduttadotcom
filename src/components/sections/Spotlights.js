import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval'
import ImageGallery from '../image-gallery/ImageGallery';

const Spotlights = ({ spotLightsData }) => {

    return (
        <section id="work" className='spotlights'>
            <h1 className='neonText spotlight-header' >SPOTLIGHTS</h1>
            <ImageGallery spotLightsData={spotLightsData.items} />
        </section>
    );
};

export default Spotlights;