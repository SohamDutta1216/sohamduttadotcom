import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import './phone.scss'

const Phone = () => {
    const [phoneButton, setPhoneButton] = useState(false)
    const form = useRef();
    const [showError, setError] = useState(false)
    const [showSuccess, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_qe50n35", "template_4z8q8ah", form.current, 'user_HC18YiCW28WYlD9ry87FB')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setError(true)
                setTimeout(() => { setError(false) }, 3000)
            });
    };
    console.log(form.current)
    function onClickEvent() {
        setPhoneButton(false)
        setSuccess(false)
    }
    return (
        <>
            {!phoneButton ?
                <div class="wrapper">
                    <div class="phone-full-wrapper">
                        <div class="phone-wrapper">
                            <div class="speaker">
                            </div>
                            <div class="brand-name">NOKIA</div>
                            <div class="screen">
                                <div class="locked-screen">
                                    <span class="time"><button onClick={() => setPhoneButton(true)}>Message Me</button></span>
                                </div>
                            </div>
                            <div class="keypad">
                                <div class="actions">
                                    <div class="actions-left">
                                        <button>-</button>
                                        <button>-</button>
                                    </div>
                                    <div class="actions-center">
                                        <button class="big"></button>
                                    </div>
                                    <div class="actions-right">
                                        <button>-</button>
                                        <button>-</button>
                                    </div>

                                </div>
                                <div class="numbers">
                                    <div class="numbers-left">
                                        <button>1</button>
                                        <button>4<span>ghi</span></button>
                                        <button>7<span>pqrs</span></button>
                                        <button>*</button>
                                    </div>
                                    <div class="numbers-center">
                                        <button>2<span>abc</span></button>
                                        <button>5<span>jkl</span></button>
                                        <button>8<span>tuv</span></button>
                                        <button>0</button>
                                    </div>
                                    <div class="numbers-right">
                                        <button><span>def</span>3</button>
                                        <button><span>mno</span>6</button>
                                        <button><span>wxyz</span>9</button>
                                        <button>#</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <form ref={form} onSubmit={sendEmail} >
                    <div className='form'>
                        <div className='form-modal-top'>
                            <p className='form-title'>Contact Me</p>
                            <p onClick={() => (onClickEvent())} className='form-close'>X</p>
                        </div>
                        {!showSuccess ?
                            <div className='form-container'>
                                <div className="form-row">
                                    <div className='form-column-small'>
                                        <label>Name</label><input type="text" name="user_name" required />
                                    </div>
                                    <div className='form-column-small'>
                                        <label>Email</label><input type="email" name="user_email" required />
                                    </div>
                                </div>
                                <div className='form-subjext'>
                                    <label>Subject</label><input name="subject" required />
                                </div>
                                <div className='form-column-large'>
                                    <label>Message</label><textarea name="message" required />
                                </div>
                            </div> :
                            <div className='form-sent-container'>
                                <h3 >SENT</h3>
                                <br />
                                <h4>I'll get back to you within 3 business days </h4>
                            </div>
                        }
                        {!showSuccess &&
                            <div className='form-send'> <button type="submit" value="Send">Send</button></div>
                        }

                    </div>
                </form>
            }
        </>
    );
};


export default Phone;