import React, { Component } from 'react';
import { IRecipe } from '../Classes/Recipe';

interface SearchProps {
    recipes: IRecipe[];
}

interface SearchState {
}

export class Search extends Component<SearchProps, SearchState> {
    static displayName = Search.name;

    constructor(props: SearchProps) {
        super(props);
        this.state = { dateValue: new Date(), sensorIdValue: 1, sensorData: [], sensors: [], sensorSelected: null };
        this.onChange = this.onChange.bind(this);
    }

    onChange(recipeTitle: string) {
        window.location.href = this.getPathFromUrl(window.location.href) + "?Title=" + recipeTitle;
    }

    getPathFromUrl(url: string) {
        return url.split("?")[0];
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
