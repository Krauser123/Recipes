import React from 'react';
import './App.css';
import { HomeMenu } from './Components/HomeMenu';

function App() {

  return (
    <div className="App">
      <div className='appTitle'>🍔 Recipes</div>
      <HomeMenu></HomeMenu>      
    </div>
  );
}

export default App;
