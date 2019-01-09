import React from 'react';

import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [
        {
          _id: 1528817077286,
          task: 'Organize Garage',
          completed: false
        },
        {
          _id: 1528817084358,
          task: 'Bake Cookies',
          completed: false
        }
      ]
    }

    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  handleChange = e => {
    const input = e.currentTarget.dataset.input;
  }

  handleClick = e => {
    const button = e.currentTarget.dataset.button;
  }

  render() {
    return (
      <div className="todo-app">
        <h1 className="todo-main-header">Todo App</h1>
        <TodoForm 
          handleChange={this.handleChange}
          handleClick={this.handleClick} />
        <TodoList 
          todoList={this.state.todos}
          handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
