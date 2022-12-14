import React, { useState } from 'react';
import './ImageGallery.scss'

const ImageGallery = () => {
    const [mainImage, setImage] = useState(null)
    console.log(mainImage)
    return (
        <div>
            {mainImage && (
                <div className='modal'>
                    <button className="close" onClick={() => setImage(null)}>x</button>
                    <div className="main-image-wrapper">
                        <img src={mainImage} className='main-image' />
                    </div>
                </div>

            )}
            <div className='image-gallery'>
                <button >
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Did you know?</h4></div>
                </button>
                <button >
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Artist Spotlight</h4> </div>
                </button>
                <button >
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Genre Spotlight</h4> </div>
                </button>
                <button >
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Film Spotlight</h4> </div>
                </button>
                <button >
                    <div className='single-spotlight'><h4 className='single-spotlight__text'>Song of the Day</h4> </div>
                </button>
            </div>
        </div>
    );
};

export default ImageGallery;