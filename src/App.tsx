import React from 'react';
import './App.css';
import { HomeMenu } from './Components/HomeMenu';

function App() {

  return (
    <div className="App">
      <div className='appTitle'>🍔 Recetas</div>
      <HomeMenu></HomeMenu>      
    </div>
  );
}

export default App;
