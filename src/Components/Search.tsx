import React, { Component } from 'react';
import { IRecipe } from '../Classes/IRecipe';
import { Utils } from '../Classes/Utils';

interface SearchProps {
    recipes: IRecipe[];
}

interface SearchState {
}

export class Search extends Component<SearchProps, SearchState> {
    static displayName = Search.name;


    constructor(props: SearchProps) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    onChange(recipeTitle: string) {
        window.location.href = Utils.getPathFromUrl(window.location.href) + "?Title=" + recipeTitle;
    }

    render() {

        return (
            <div className="sidemenu">

                {this.props.recipes.map((element, index) => (
                    <div key={index} className="row">
                        <div className="col-sm">
                            <div className='recipeLink' onClick={() => this.onChange(element.Title)} >{element.Title}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
