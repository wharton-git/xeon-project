import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Index from './components/accueil.jsx';
import Home from './components/home.jsx';
import Club from './components/club.jsx';
import Sport from './components/sports.jsx';

import './App.css';
import Connex from './pages/home'
import Create from './pages/create'

function App() {


  return (
    <div>

        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/club" element={<Club />} />
          </Routes>

    </div>
  );
}

export default App;
