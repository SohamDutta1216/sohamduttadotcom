import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
const Contact = (isInView) => {
    const [showButton, setShowButton] = useState(false)
    useInterval(() => {
        if (isInView.isInView === true) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, 20);
    return (
        <section id="contact" className='neonText'>
            <h3>CONTACT US</h3>
        </section>
    );
};

export default Contact;