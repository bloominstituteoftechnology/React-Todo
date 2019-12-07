import React from 'react';

import { todo } from './components/data';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './styles.css';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
      task: '',
      id: 0,
      completed: false
    };
    console.log('this is state', todo);
  }

  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      todo: this.state.todo.map(item => {
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

  clearCompleted = item => {
    this.setState({
      todo: this.state.todo.filter(item => {
        if (item.completed === false) {
          return {
            ...item,
            completed: !item.completed
          };
        }
      })
    });
  };

  addItem = itemText => {
    const newItem = {
      task: itemText,
      completed: false,
      id: Date.now()
    };

    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Hutch's TODO List:</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList todo={this.state.todo} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}
export default App;
