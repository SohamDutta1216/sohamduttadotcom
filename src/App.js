import React from 'react';
import './scss/main.scss'
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const border = location.pathname === "/" ? "force-border" : "border"
  return (
    <div>
      <div className={border}></div>
      <div className="screen-overlay">
        <div className='screen-container screen-change'>
          <Outlet />
          <div className='play-container'>
            <h1 className="name-header">Soham Dutta</h1>
            <h1 className="sub name-header">Front End Developer</h1>
            <button className="start-button">
              <div className='js-trigger-transition' />
              <div class="landing-start-arrow">›</div>
              <Link to='/home'><p className='play-button' >Press Start</p></Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
