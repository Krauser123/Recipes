import React, { Component } from 'react';
import { IRecipe } from '../Classes/IRecipe';
import { Utils } from '../Classes/Utils';

interface SideMenuProps {
    recipes: IRecipe[];
}

interface SideMenuState {
}

export class SideMenu extends Component<SideMenuProps, SideMenuState> {
    static displayName = SideMenu.name;


    constructor(props: SideMenuProps) {
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
