import React from 'react';
import './App.css';
import { default as recipes } from "./Data/recipes.json";
import { Search } from './Components/Search';
import { SideMenu } from './Components/SideMenu';
import { RecipeNote } from './Components/RecipeNote';
import { IRecipe } from './Classes/Recipe';

function App() {


  return (

    <div className="App">
      <SideMenu></SideMenu>
      <div className='recipesSearch'>
        <Search recipes={recipes as IRecipe[]}></Search>
      </div>
      <div className='recipesView'>
        <RecipeNote recipe={recipes[0] as IRecipe}></RecipeNote>
      </div>
    </div>
  );
}

export default App;
