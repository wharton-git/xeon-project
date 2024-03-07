import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Index from './components/accueil.jsx';
import Home from './components/home.jsx';
import Club from './components/club.jsx';
import Sport from './components/sports.jsx';
import Connex from './pages/Connex.js'
import Chat from './components/fChat.jsx'
import Guide from './components/Guide.jsx'

import './App.css';


function App() {


  return (
    <div>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/club" element={<Club />} />
            <Route path="/connex" element={<Connex />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>

    </div>
  );
}

export default App;
