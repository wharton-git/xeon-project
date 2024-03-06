import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/accueil.jsx';
import Home from './components/home.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
