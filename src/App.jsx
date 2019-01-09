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
      list: ToDoItems,
      task: ''
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.holder]: e.target.value });
  };

  submitForm(e) {
    e.preventDefault();
    this.setState({
      list: [
        ...this.state.list,
        { task: this.state.task, id: generateId, completed: false }
      ],
      task: ''
    });
  }

  render() {
    return (
      <div className="container">
        <h1>To Do App</h1>
        <ToDoList
          list={this.state.list}
          handleChanges={this.handleChanges}
          submitForm={this.submitForm}
          inputText={this.state.inputText}
          holder4={this.state.holder}
        />
      </div>
    );
  }
}

export default App;
