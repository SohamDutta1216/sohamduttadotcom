import Layout from './components/Layout';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import './scss/main.scss'
import SOSlogo from './images/logo/SOSlogo.png'
import Needle from './images/needle.png'
import Black from './images/black.png'
function App() {
  const [showStarting, setStarting] = useState(true)
  const [showRotation, setRotation] = useState(false)
  const [showTransition, setTransition] = useState(false)
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const handleClick = async event => {
    setRotation(true)
    setTransition(true)
    await delay(4000);
    setStarting(false)
  }
  return (
    <div >
      {showStarting &&
        <div>
          <img src={Black} style={{ display: 'none' }} className={`${showTransition && 'black'}`} />
          <div className={`start-logo ${showRotation && 'animate-rot'}`}>
            <div className='start-main-container'>
              <img src={SOSlogo} className='main-logo' />
            </div>
            <div className='play-container'>
              <button onClick={() => handleClick()}>
                <a className='play-btn js-trigger-transition' />
                <h1>Press Play</h1>
              </button>
            </div>
          </div>
        </div>
      }
      {!showStarting &&
        <Layout />
      }
    </div>
  );
}

export default App;
