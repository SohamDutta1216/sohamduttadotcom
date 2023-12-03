import React, { useState } from 'react';
import Nav from '../navigation/Nav';
import { Link } from "react-router-dom";
import './phone.scss'
const Phone = () => {
    const [phoneButton, setPhoneButton] = useState(false)
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
                <div className='form'>
                    <div className='form-modal-top'>
                        <p className='form-title'>Contact Me</p>
                        <p onClick={() => (setPhoneButton(false))} className='form-close'>X</p>
                    </div>
                    <div className="form-row">
                        <div className='form-column-small'>
                            <label>Name</label><input></input>
                        </div>
                        <div className='form-column-small'>
                            <label>Subject</label><input></input>
                        </div>
                    </div>
                    <div className='form-column-large'>
                        <label>Message</label><textarea></textarea>

                    </div>
                    <div className='form-send'> <button>Send</button></div>
                </div>
            }
        </>
    );
};


export default Phone;