import React, { useState } from 'react';
import './ImageGallery.scss'

const ImageGallery = () => {
    const [mainSpotlight, setSpotlight] = useState('')
    console.log(mainSpotlight)
    return (
        <div>
            {mainSpotlight && (
                <div className='modal'>
                    <button className="close" onClick={() => setSpotlight(null)}>x</button>
                    <div className="main-image-wrapper">
                        <h1 className='neonText'>{mainSpotlight}</h1>
                    </div>
                </div>

            )}
            <div className='image-gallery'>
                <button onClick={() => setSpotlight('Did you know')}>
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Did you know?</h4></div>
                </button>
                <button onClick={() => setSpotlight('Artist Spotlight')}>
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Artist Spotlight</h4> </div>
                </button>
                <button onClick={() => setSpotlight('Genre Spotlight')}>
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Genre Spotlight</h4> </div>
                </button>
                <button onClick={() => setSpotlight('Film Spotlight')}>
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Film Spotlight</h4> </div>
                </button>
                <button onClick={() => setSpotlight('Song of the Day')}>
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Song of the Day</h4> </div>
                </button>
            </div>
        </div>
    );
};

export default ImageGallery;