import React, { Component } from 'react';

import './App.css';

import ToDoList from './components/TodoComponents/TodoList';

let generateId = Date.now();

const ToDoItems = [
  { task: 'finish building todo app', id: generateId, completed: true },
  { task: 'cook dinner', id: generateId + 1, completed: false },
  { task: 'clean kitchen', id: generateId + 2, completed: false },
  { task: 'buy a nintendo switch', id: generateId + 3, completed: false }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ToDoItems,
      addingTask: ''
    };
  }

  toggleCompleted = task => {
    this.setState(previousState => {
      const updatedList = previousState.list.map(toDoItem => {
        if (toDoItem.task === task) {
          toDoItem.completed = !toDoItem.completed;
        }
        return toDoItem;
      });
      return {
        list: updatedList
      };
    });
  };

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    this.setState({
      list: [
        ...this.state.list,
        { task: this.state.addingTask, id: Date.now(), completed: false }
      ],
      addingTask: ''
    });
  };

  render() {
    return (
      <div className="container">
        <h1>To Do App</h1>
        <ToDoList
          list={this.state.list}
          handleChanges={this.handleChanges}
          submitForm={this.submitForm}
          addingTask={this.state.addingTask}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
