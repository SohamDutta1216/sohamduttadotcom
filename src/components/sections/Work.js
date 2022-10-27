import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval'

const Work = (isInView) => {
    const [showButton, setShowButton] = useState(false)
    useInterval(() => {
        if (isInView.isInView === true) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, 20);
    return (
        <section id="work" className='work'>
            <div className='up'>
                {showButton === true && <a href="#home" class="to-top">Back to top</a>
                }
            </div>
            <h1>WORK</h1>
        </section>
    );
};

export default Work;