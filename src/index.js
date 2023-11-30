import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='border'></div>
    <div className="screen-overlay">
      <div className='screen-container screen-change'>
        <App />
      </div>
    </div>
  </React.StrictMode>
);


