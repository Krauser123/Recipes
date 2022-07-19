import React, { Component } from 'react';
import { RecipeNote } from './RecipeNote';
import { SideMenu } from './SideMenu';
import { SearchCollapse } from './SearchCollapse';
import { default as recipes } from "../Data/recipes.json";
import { IRecipe } from '../Classes/IRecipe';
import { NotFound } from './NotFound';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Utils } from '../Classes/Utils';
import { SearchItem } from '../Classes/SearchItem';

interface HomeProps {
}

interface HomeState {
}

export class HomeMenu extends Component<HomeProps, HomeState> {
    static displayName = HomeMenu.name;
    searchItems: SearchItem[] = [];

    constructor(props: HomeProps) {
        super(props);
        this.state = {};

        for (let i = 0; i < recipes.length; i++) {
            let item: SearchItem = new SearchItem(i, recipes[i].Title);
            this.searchItems.push(item);
        }
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

    getParameterByName = (name: string, url = window.location.href) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    handleOnSelect = (item: any) => {
        console.log(item);
        window.location.href = Utils.getPathFromUrl(window.location.href) + "?Title=" + item.name;
    }

    render() {
        let recipeId = this.searchRecipeFromQueryString();
        let content: JSX.Element;
        let centralContent: JSX.Element;

        if (recipeId === -1) {
            centralContent = <NotFound></NotFound>;;
        } else {
            centralContent = <RecipeNote recipe={recipes[recipeId] as IRecipe}></RecipeNote>
        }

        content = <div>
            <div className='recipesAutoSearch'>
                <ReactSearchAutocomplete
                    items={this.searchItems}
                    onSelect={this.handleOnSelect}
                    autoFocus
                    placeholder='Buscar recetas'
                />
            </div>
            <div className='recipesSearch'>
                <SideMenu recipes={recipes as IRecipe[]}></SideMenu>
            </div>
            <div className='recipesSearchCollapse'>
                <SearchCollapse recipes={recipes as IRecipe[]}></SearchCollapse>
            </div>
            <div className='recipesView'>
                {centralContent}
            </div>
        </div>;

        return (
            content
        );
    }
}