import React, { Component } from 'react';
import { RecipeNote } from './RecipeNote';
import { Search } from './Search';
import { default as recipes } from "../Data/recipes.json";
import { IRecipe } from '../Classes/Recipe';

interface HomeProps {
}

interface HomeState {
}

export class HomeMenu extends Component<HomeProps, HomeState> {
    static displayName = HomeMenu.name;

    constructor(props: HomeProps) {
        super(props);
        this.state = {};
    }

    searchRecipeFromQueryString(): number {
        let recipeId = 0;
        var queryValue = this.getParameterByName('Title');

        if (queryValue != null) {
            recipeId = recipes.findIndex(object => {
                return object.Title === queryValue;
            });
        }

        return recipeId;
    }

    getParameterByName(name: string, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    render() {
        let recipeId = this.searchRecipeFromQueryString();
        let content: JSX.Element;
        if (recipeId === -1) {
            content = <div className="notfoundContainer">
                <div className="notfound">
                    <div className="notfound-404">
                        <h3>Oops! Page not found</h3>
                        <h1><span>4</span><span>0</span><span>4</span></h1>
                    </div>
                    <h2>we are sorry, but the page you requested was not found</h2>
                </div>
            </div>;
        } else {
            content = <div>
                <div className='recipesSearch'>
                    <Search recipes={recipes as IRecipe[]}></Search>
                </div>
                <div className='recipesView'>
                    <RecipeNote recipe={recipes[recipeId] as IRecipe}></RecipeNote>
                </div>
            </div>;
        }

        return (
            content
        );
    }
}




