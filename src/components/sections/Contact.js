import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { ContactForm } from '../form/form';
const Contact = () => {
    return (
        <section id="contact" >
            <h3 className='neonText header'>CONTACT US</h3>
            <ContactForm />
        </section>

    );
};

export default Contact;