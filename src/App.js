import React, { useState } from 'react';
import List from './List.js';
import Clear from './Clear';
import Add from './Add';

const initialListItems = [
  {
    task: 'Click me to mark complete',
    id: 0,
    completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      listItems: initialListItems
    }
  }
  
  //handler to mark items completed
  toggleCompleted = (e) => {
    console.log(`${e.target.value} is done!`)
  }

  //handler to add items to list
  handleItemAdd = itemName => {
    const newItem = {
      task: itemName,
      id: this.state.listItems.length,
      completed: false,
    };
    
    const newItems = [ ...this.state.listItems, newItem];

    this.setState({
      listItems: newItems
    })
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <List items={this.state.listItems} toggleCompleted={this.toggleCompleted}/>
        <Add handleItemAdd={this.handleItemAdd} />
        <Clear />
      </div>
    );
  }
}

export default App;
