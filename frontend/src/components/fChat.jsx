import React, { useState, useRef } from 'react';
import Auth from './Auth.jsx';
import { Chat } from './Chat.jsx'; // Make sure to import the Chat component 
import './../styles/css/Style.css';

import { signOut } from 'firebase/auth';
// import {auth} from 'firebase/auth';

import Cookies from "universal-cookie";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  // const signUserOut = async () => {
  //   await signOut(auth)
  //   cookies.remove("auth-token")
  //   setIsAuth(false)
  // setRoom(null) };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
<div className='fondFchat'>
<div className='h-12'></div>
<div className='w-max fchatContent'>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className='room m-24 w-max text-center glass'>
          <label className='block my-4'>Entre le nom du Salon</label>
          <input ref={roomInputRef} className='block p-2 bg-gray-600 rounded-lg text-white my-4 mx-7' />
          <button  className='p-2 bg-green-700 rounded-lg text-white animate-pulse mb-8' onClick={() => setRoom(roomInputRef.current.value)}>Rejoindre</button>
        </div>
        
      )}

      {/* <div className='sign-out'>
        <button onClick={signUserOut}>Sign out</button>
      </div> */}
      
    </div>
</div>
  );
}

export default App;
