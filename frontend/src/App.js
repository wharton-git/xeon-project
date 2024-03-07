import logo from './logo.svg';
import './App.css';
import {Routes , Route , Link} from "react-router-dom";
import Home from './pages/home'
import Create from './pages/create'
import Chat from './pages/Chat'

function App() {
  return (
    <div className="App">
      <li className='Nav-item'>
        <Link to={"/"} className='nav-link' >Home</Link>
        <Link to={"/create"} className='nav-link' >Create</Link>
        <Link to={"/Chat"} className='nav-link' >Chat</Link>
      </li>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} /> 
          
          <Route path="/Chat" element={<Chat />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
