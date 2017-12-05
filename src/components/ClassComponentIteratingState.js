import React, { Component } from 'react'; 

class classComponentIteratingState extends Component {
    constructor() {
        super()
        this.state = {
            ingredients: ['flour', 'eggs', 'milk', 'sugar', 'vanilla'];
            newIngredient
   };
}

handleIngredientInput= (event) => {
    this.setState({ newIngredient: event.target.value });
}

addIngredient = (event) => {
  event.preventDefault(); 
  const ingredientsList = this.state.ingredients;
  ingredientsList.push(this.state.newIngredient);
  this.setState({
      newIngredient: '',
      Ingredients: ingredientsList
  });
}

render() {
    return (
        <div>
            {this.state.ingredients.map(ingredient => <ChildComponent>}
            <form onSubmit={this.addIngredient}>
               <input onChange={this.handleIngredientInput} placeholder
            </form>
            </div>
    );
}
  }
export default ClassComponentIteratingState; 
 