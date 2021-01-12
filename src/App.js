import React, { useState } from 'react';
import List from './List.js';
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
  toggleCompleted = (itemId) => {
    this.setState({
      listItems: this.state.listItems.map(item=>{
        console.log('hey!');
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return(item);
      })
    });
  }

  //handler to add items to list
  handleItemAdd = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };
    
    const newItems = [ ...this.state.listItems, newItem];

    this.setState({
      listItems: newItems
    })
  }

  clearCompleted = e => {
    return;
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>To-Do List</h1>
        </div>
        <List items={this.state.listItems} toggleCompleted={this.toggleCompleted}/>
        <Add handleItemAdd={this.handleItemAdd} />
        <button id='clear' onClick={this.clearCompleted}>
          Delete Completed Items
        </button>
      </div>
    );
  }
}

export default App;
