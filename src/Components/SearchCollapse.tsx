import React, { Component } from 'react';
import { IRecipe } from '../Classes/IRecipe';
import { Utils } from '../Classes/Utils';
import { SearchCollapseItem } from './SearchCollapseItem';

interface SearchCollapseProps {
    recipes: IRecipe[];
}

interface SearchCollapseState {
}

export class SearchCollapse extends Component<SearchCollapseProps, SearchCollapseState> {
    static displayName = SearchCollapse.name;
    recipesByCat: IRecipe[] = [];

    constructor(props: SearchCollapseProps) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    groupByCategory(xs: any, prop: string) {
        var grouped: any = {};
        for (var i = 0; i < xs.length; i++) {
            var p = xs[i][prop];
            if (!grouped[p]) { grouped[p] = []; }
            grouped[p].push(xs[i]);
        }
        return grouped;
    }

    onChange(recipeTitle: string) {
        window.location.href = Utils.getPathFromUrl(window.location.href) + "?Title=" + recipeTitle;
    }

    render() {
        let recipesPerCategories = this.groupByCategory(this.props.recipes, 'Type');

        return (
            <div className="menuCategories">                
                    {Object.keys(recipesPerCategories).map((category: string, index) => (
                        <SearchCollapseItem recipesPerCategories={recipesPerCategories} category={category}></SearchCollapseItem>
                    ))}
            </div>
        );
    }
}
