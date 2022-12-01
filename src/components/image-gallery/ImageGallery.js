import React, { useState } from 'react';
import './ImageGallery.scss'
import Image2 from '../../images/work/image2.jpeg'
import Image3 from '../../images/work/image3.jpeg'
import Image4 from '../../images/work/image4.jpeg'
import Image5 from '../../images/work/image5.jpg'
import Image6 from '../../images/work/image6.jpeg'
import Image7 from '../../images/work/image7.jpeg'
import Image8 from '../../images/work/image8.jpeg'
import Image9 from '../../images/work/image9.jpg'
const images = [Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9]

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
                {images.map((image, index) => {
                    return (
                        <button onClick={() => setImage(image)} key={index} >
                            <img src={image} className='single-image' alt='image' />
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default ImageGallery;