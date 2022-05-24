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

    onChange(nextValue: any) {
        this.setState({ dateValue: nextValue })
    }

    render() {
        let as2 = this.props.recipes as IRecipe[];

        return (
            <div className="sidemenu">
                {as2.map((element, index) => (
                    <div key={index} className="row">
                        <div className="col-sm">
                            {element.Title}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
