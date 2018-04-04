
import React, { Component } from 'react';
import Child from './ToDoSecon';

class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: ['Finish React', 'Study Japanese', 'Make Dinner'],
            newIngredient: ''
        };
    }

    addIngredient = (event) => {
        event.preventDefault();
        const ingredientsList = this.state.ingredients;
        ingredientsList.push(this.state.newIngredient);
        this.setState({
            newIngredient: '',
            ingredients: ingredientsList
        });
    };

    handleIngredientInput = (event) => {
        this.setState({ newIngredient: event.target.value });
    };

    render() {
        return (
            <div>
                {this.state.ingredients.map((ingredient, i) => <Child key={i} thing={ingredient} />)}
                <form onSubmit={this.addIngredient}>
                    <input type="text" 
                    onChange={this.handleIngredientInput} 
                    placeholder="Add a new activity" 
                    value={this.state.newIngredient} />
                </form>
            </div>
        );
    }
}

export default ToDo;