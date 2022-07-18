import React, { Component } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import Constants from '../Classes/Constants';
import { IRecipe } from '../Classes/IRecipe';

interface RecipeNoteProps {
    recipe: IRecipe;
}

interface RecipeNoteState {
}

export class RecipeNote extends Component<RecipeNoteProps, RecipeNoteState> {
    static displayName = RecipeNote.name;

    render() {

        let contentIngredients2: JSX.Element = <div></div>;
        let tagsContent: JSX.Element[] = [];
        let colorForTag: string[] = ["amber", "aqua", "blue", "light-blue", "brown", "blue-grey", "green", "light-green", "indigo", "khaki",
            "lime", "orange", "deep-orange", "pink", "purple", "deep-purple", "red", "sand", "teal", "yellow", "grey"];

        //Build additional ingredients
        if (this.props.recipe.Ingredients2.TitleIngredients2 !== null) {
            contentIngredients2 = <div className="ingredientsContainer">
                <h4>{this.props.recipe.Ingredients2.TitleIngredients2}</h4>
                {this.props.recipe.Ingredients2.Ingredients.map((element, index) => (
                    <div key={index} className="row">
                        <div className="col-sm">
                            <Form.Check
                                type="checkbox"
                                id={`default-${element}`}
                                label={element}
                            />
                        </div>
                    </div>
                ))}
            </div>
        }

        //Build tags
        if (this.props.recipe.Tags != null) {
            for (let i = 0; i < this.props.recipe.Tags.length; i++) {

                //Get random number
                let rnd = Math.floor(Math.random() * (colorForTag.length));

                //Build and push tag
                let colorTagWithCss = "tag w3-tag w3-padding w3-round-large w3-center w3-" + colorForTag[rnd];
                tagsContent.push(<span className={colorTagWithCss}>{this.props.recipe.Tags[i]}</span>);

                //Remove color from list
                colorForTag.splice(rnd,1);
            }
        }

        return (
            <div className='recipeNote'>
                <h3 className='recipeTitle'>{this.props.recipe.Title}</h3>
                <div className="ingredientsContainer">
                    <h4>{Constants.Ingredientes}</h4>
                    {this.props.recipe.Ingredients.map((element, index) => (
                        <div key={index} className="row">
                            <div className="col-sm">
                                <Form.Check
                                    type="checkbox"
                                    id={`default-${element}`}
                                    label={element}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {contentIngredients2}

                <div className='recipeTags'>
                    {tagsContent}
                </div>

                <div className='recipeSteps'>
                    <h4>{Constants.Prepracion}</h4>
                    <ListGroup as="ol" numbered={true} className='recipeStepsLG'>
                        {this.props.recipe.Steps.map((element, index) => (
                            <div key={index} className="row">
                                <ListGroup.Item >{element}</ListGroup.Item>
                            </div>
                        ))}
                    </ListGroup>
                </div>
            </div>
        );
    }
}