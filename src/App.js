import Layout from './components/Layout';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import './scss/main.scss'
import SOSlogo from './images/logo/SOSlogoalt.png'
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
        <div className='start-overlay'>
          <iframe src="https://www.youtube.com/embed/lhJpOjqho8s?&autoplay=1&loop=1&showinfo=0&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <img src={Black} style={{ display: 'none' }} />
          <div>
            <div className={`start-logo ${showRotation && 'animate-rot'}`}>
              <div className='start-bg'>
                <div className='start-box'>
                  <div className='start-nav'>Sounds of Spotlight</div>
                  <div className='start-main-container'>
                    <img src={SOSlogo} className='main-logo' />
                  </div>
                  <div className='play-container'>
                    <button onClick={() => handleClick()}>
                      <a className='js-trigger-transition' />

                      <p className='play-button' >▶ PLAY</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {!showStarting &&
        <div className='start-bg-secondary'>
          <Layout />
        </div>
      }
    </div>
  );
}

export default App;
