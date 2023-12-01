import Layout from './components/Layout';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import './scss/main.scss'
import SOSlogo from './images/logo/SOSlogoalt.png'
import Black from './images/black.png'
import useContentful from './useContentful'
import SOSlogoAlt from './images/logo/SOSlogo.png'

function App() {
  const [showStarting, setStarting] = useState(true)
  const [showRotation, setRotation] = useState(false)
  const [showTransition, setTransition] = useState(false)
  const [starterVideo, setStarterVideo] = useState('')
  const [spotLightsData, setSpotLightsData] = useState({})
  const { getData } = useContentful()
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const handleClick = async event => {
    setRotation(true)
    setTransition(true)
    await delay(100);
    setStarting(false)
  }

  return (
    <div className="screen-overlay ">
      <div className='screen-container screen-change'>
        {showStarting &&
          <div className='play-container'>
            <h1 className="name-header">Soham Dutta</h1>
            <h1 className="sub name-header">Front End Developer</h1>
            <button onClick={() => handleClick()} className="start-button">
              <a className='js-trigger-transition' />
              <div class="landing-start-arrow">›</div>
              <p className='play-button' >Press Start</p>
            </button>
          </div>
        }
        {!showStarting &&
          <Layout spotLightsData={spotLightsData} />
        }
      </div>
    </div>

  );
}

export default App;
