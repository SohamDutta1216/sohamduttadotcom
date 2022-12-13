import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval'
import ImageGallery from '../image-gallery/ImageGallery';

const Spotlights = (isInView) => {
    const [showButton, setShowButton] = useState(false)
    useInterval(() => {
        if (isInView.isInView === true) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, 20);
    return (
        <section id="work" className='spotlights'>
            <h1 className='neonText spotlight-header' >SPOTLIGHTS</h1>
            <div className='up'>
                {showButton === true && <a href="#home" class="to-top">Back to top</a>
                }
            </div>

            <ImageGallery />

        </section>
    );
};

export default Spotlights;