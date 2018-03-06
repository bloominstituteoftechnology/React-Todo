import React, { Component } from 'react';

import ToDoList from './Components/TodoListComponent/TodoListComponent.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ToDoList />
      </div>
    );
  }
}
