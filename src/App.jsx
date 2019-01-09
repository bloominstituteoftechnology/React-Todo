import React, { Component } from 'react';

import './App.css';

import ToDoList from './components/TodoComponents/TodoList';

let generateId = Date.now();

const ToDoItems = [
  { task: 'finish building todo app', id: generateId, completed: false },
  { task: 'cook dinner', id: generateId + 1, completed: false },
  { task: 'clean kitchen', id: generateId + 2, completed: false },
  { task: 'buy a nintendo switch', id: generateId + 3, completed: false }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ToDoItems
      // pass this data down to ToDo Component, then iterate over each item
    };
  }

  submitForm(e) {
    e.preventDefault();
    // this.setState(e.target.value);
  }

  render() {
    return (
      <div className="container">
        <h1>To Do App</h1>
        <ToDoList submitForm={this.submitForm} list={this.state.list} />
      </div>
    );
  }
}

export default App;
