import React, { Component } from 'react';
import ToDoList from './components/ToDoList.js';

class TheList extends Component {
  constructor() {
    super();
    this.state = {
      task:'',
      id:'',
      completed:[]
    };
  }
  render() {
    return
  }
}

const App = () => (
  <div>
    <h2>Todo App</h2>
    <ToDoList />
  </div>
);

export default App;

