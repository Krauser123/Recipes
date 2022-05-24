import React, { Component } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import Constants from '../Classes/Constants';
import { IRecipe } from '../Classes/Recipe';

interface RecipeNoteProps {
    recipe: IRecipe;
}

interface RecipeNoteState {
    recipe: IRecipe;
}

export class RecipeNote extends Component<RecipeNoteProps, RecipeNoteState> {
    static displayName = RecipeNote.name;

    constructor(props: RecipeNoteProps) {
        super(props);
        this.state = { recipe: this.props.recipe };
    }

    render() {

        return (
            <div className='recipeNote'>
                <h3>{this.state.recipe.Title}</h3>
                <div>
                    <h4>{Constants.Ingredientes}</h4>
                    {this.state.recipe.Ingredients.map((element, index) => (
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
                <div className='recipeSteps'>
                    <h4>{Constants.Prepracion}</h4>
                    <ListGroup as="ol" numbered className='recipeStepsLG'>
                        {this.state.recipe.Steps.map((element, index) => (
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




