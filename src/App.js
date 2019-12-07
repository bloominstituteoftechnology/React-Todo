import React from 'react';

import { todo } from './components/data';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo
    };
  }

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      items: this.state.item.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    });
  };

  addItem = itemText => {
    const newItem = {
      name: itemText,
      completed: false,
      id: Date.now
    };

    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Hutch's TODO List:</h2>
          <TodoForm addItem={this.item} />
        </div>
        <TodoList todo={this.state.todo} toggleItem={this.toggleItem} />
      </div>
    );
  }
}
export default App;
