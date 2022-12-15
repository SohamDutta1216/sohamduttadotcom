import Layout from './components/Layout';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import './scss/main.scss'
import { GraphQLClient } from 'graphql-request';
import SOSlogo from './images/logo/SOSlogo.png'

function App() {
  const [showStarting, setStarting] = useState(true)
  const [showRotation, setRotation] = useState(false)

  const hygraph = new GraphQLClient(
    'https://api-us-east-1.hygraph.com/v2/clbn867yy0xc001uoa0m0csyb/master'
  );
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const handleClick = async event => {
    setRotation(true)
    await delay(2000);
    setStarting(false)
  }
  return (
    <div >
      {showStarting &&
        <div className={`start-logo ${showRotation && 'animate-rot'}`}>
          <img src={SOSlogo} className='main-logo' />
          <div className='play-container'>
            <button onClick={() => handleClick()}>
              <a className='play-btn' />
              <h1>Press Play</h1>
            </button>
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
