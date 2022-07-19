
import React, { Component } from 'react';
import { IRecipe } from '../Classes/IRecipe';
import { Utils } from '../Classes/Utils';
import { Collapse } from 'react-collapse';

interface SearchCollapseItemProps {
    recipesPerCategories: any;
    category: string;
}

interface SearchCollapseItemState {
    isOpened: boolean;
}

export class SearchCollapseItem extends Component<SearchCollapseItemProps, SearchCollapseItemState> {
    static displayName = SearchCollapseItem.name;
    recipesByCat: IRecipe[] = [];

    constructor(props: SearchCollapseItemProps) {
        super(props);
        this.state = { isOpened: false };
        this.onClick = this.onClick.bind(this);
        this.onClickCollapse = this.onClickCollapse.bind(this);
    }

    onClick(recipeTitle: string) {
        window.location.href = Utils.getPathFromUrl(window.location.href) + "?Title=" + recipeTitle;
    }

    onClickCollapse() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        let icon = "🔻";
        if (this.state.isOpened) {
            icon = "🔺";
        }

        return (
            <div className="menuCategoriesItem">
                <div onClick={() => this.onClickCollapse()}>{icon}{this.props.category}</div>
                <Collapse isOpened={this.state.isOpened}>
                    {this.props.recipesPerCategories[this.props.category].map((recipe: any, index: number) => (
                        <div key={index} className="row">
                            <div className="col-sm">
                                <div className='recipeLink' onClick={() => this.onClick(recipe.Title)}>➡️{recipe.Title}</div>
                            </div>
                        </div>
                    ))}
                </Collapse>
            </div>
        );
    }
}