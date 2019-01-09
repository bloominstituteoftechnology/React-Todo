import React from 'react';

import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
  }

  handleClick = e => {
    const button = e.currentTarget.dataset.button;
  }

  render() {
    return (
      <div className="todo-app">
        <h1 className="todo-main-header">Todo App</h1>
        <TodoList 
          handleClick={this.handleClick}/>
        <TodoForm 
          handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
