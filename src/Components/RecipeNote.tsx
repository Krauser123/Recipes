import React, { Component } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import Constants from '../Classes/Constants';
import { IRecipe } from '../Classes/IRecipe';
import { TagUtils } from '../Classes/Utils';

interface RecipeNoteProps {
    recipe: IRecipe;
}

interface RecipeNoteState {
}

export class RecipeNote extends Component<RecipeNoteProps, RecipeNoteState> {
    private tagUtils: TagUtils = new TagUtils();
    static displayName = RecipeNote.name;

    render() {

        let contentIngredients2: JSX.Element = <div></div>;
        let tagsContent: JSX.Element[] = [];

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
            tagsContent = this.tagUtils.GenerateTags(this.props.recipe.Tags);
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