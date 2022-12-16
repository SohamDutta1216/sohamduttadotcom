import Layout from './components/Layout';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import './scss/main.scss'
import SOSlogo from './images/logo/SOSlogo.png'
import Needle from './images/needle.png'
function App() {
  const [showStarting, setStarting] = useState(true)
  const [showRotation, setRotation] = useState(false)
  const handleClick = async event => {
    setRotation(true)
    await delay(2000);
    setStarting(false)

  }
  return (
    <div >
      {showStarting &&
        <div>
          <div class="loader">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
          </div>
          <main>
            <div className='-content -index'>
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
          </main>
        </div>
      }
      {!showStarting &&
        <Layout />
      }
    </div>
  );
}

export default App;
