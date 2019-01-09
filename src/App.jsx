import React from 'react';

import './App.css';

import ToDoList from './components/TodoComponents/TodoList';

const ToDoItems = [
  { task: 'finish building ToDo App', id: 1, completed: false },
  { task: 'cook dinner', id: 2, completed: false },
  { task: 'clean kitchen', id: 3, completed: false },
  { task: 'reward yourself and buy a nintendo switch', id: 4, completed: false }
];

class App extends React.Component {
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
        <ToDoList submitForm={this.submitForm} list={this.state.list} />
      </div>
    );
  }
}

export default App;
