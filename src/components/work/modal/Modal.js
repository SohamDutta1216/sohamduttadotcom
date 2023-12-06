import React from 'react';
import '../work.scss'
import Jobs from './Jobs';
import Projects from './Projects';
import Max from '../../../images/icons/max.png'
import X from '../../../images/icons/x.png'
const Modal = ({ click, setClick, setSize, size }) => {
    return (
        <div>
            <div className={` ${size === true ? 'windows-modal-large' : 'windows-modal'}`}>
                <div className='windows-modal-top'>
                    <p className='windows-title'>{click}</p>
                    <div className='windows-modal-icons'>
                        <p onClick={() => setClick('')} className='windows-close'>_</p>
                        <img src={Max} onClick={() => setSize(!size)} className='windows-max'></img>
                        <img src={X} onClick={() => setClick('')} className='windows-close'></img>
                    </div>
                </div>
                <div className="windows-container">
                    {click === "Jobs" &&
                        <Jobs />
                    }
                    {click === "Projects" &&
                        <Projects />
                    }
                </div>
            </div>
        </div>

    );
};


export default Modal;