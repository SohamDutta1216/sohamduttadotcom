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
    await delay(4000);
    setStarting(false)
  }

  useEffect(() => {
    getData().then((response) => {
      response.items.map((allData) => {
        const data = allData.fields
        if (data.url) {
          setStarterVideo(data.url)
        }
      })
      if (response.items) {
        setSpotLightsData(response)
      }
    })
  }, [])
  return (
    <div >
      {showStarting &&
        <div className='mobile-view'>
          <img src={Black} style={{ display: 'none' }} className={`${showTransition && 'black'}`} />
          <div className={`start-logo-alt ${showRotation && 'animate-rot'}`}>
            <div className='start-main-container'>
              <img src={SOSlogoAlt} className='main-logo' />
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
      {showStarting &&
        <div className='start-overlay'>
          <iframe src={`${starterVideo}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
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
          <Layout spotLightsData={spotLightsData} />
        </div>
      }
    </div>
  );
}

export default App;
