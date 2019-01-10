import React, { Component } from 'react';

import './App.css';

import ToDoList from './components/TodoComponents/TodoList';
import SearchComponent from './components/TodoComponents/SearchComponent';

let generateId = Date.now();

const ToDoItems = [
  { task: 'finish building todo app', id: generateId, completed: true },
  { task: 'cook dinner', id: generateId + 1, completed: false },
  { task: 'clean kitchen', id: generateId + 2, completed: false },
  { task: 'buy a nintendo switch', id: generateId + 3, completed: false }
];

// set up search: value in state
// set up similar method to handle method, with .filter
// if there's a match, return filtered state

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ToDoItems,
      addingTask: '',
      id: '',
      completed: '',
      searchValue: ''
    };
  }

  searchTasks = event => {
    this.handleChanges(event);
    this.setState(previousState => {
      const updatedToDoItems = previousState.list.filter(task => {
        task.task === this.state.searchValue;
      });
      return {
        list: updatedToDoItems
      };
    });
  };

  clearCompleted = () => {
    this.setState(previousState => {
      const clearedList = previousState.list.filter(
        toDoItem => !toDoItem.completed
      );
      return {
        list: clearedList
      };
    });
  };

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
        <SearchComponent
          handleChanges={this.handleChanges}
          searchTasks={this.searchTasks}
        />
        <ToDoList
          list={this.state.list}
          handleChanges={this.handleChanges}
          submitForm={this.submitForm}
          addingTask={this.state.addingTask}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
