import React from 'react';
import './App.css';
import { HomeMenu } from './Components/HomeMenu';
import Constants from './Classes/Constants';

function App() {

  return (
    <div className="App">
      <div className='appTitle'>{Constants.RecipesWithIcon}</div>
      <HomeMenu></HomeMenu>      
    </div>
  );
}

export default App;
