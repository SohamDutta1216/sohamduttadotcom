import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss'
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/pages/About'
import Work from './components/work/Work';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


