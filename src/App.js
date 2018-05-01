import React, { Component } from 'react';
import MyButton, {UserInput} from './components/ToDoList.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'To-Do',
      task: '',
      tasks: []
    };
  }

  handleNewTask = () => {
    let tasks = this.state.tasks;
    tasks.push(this.state.task);
    this.setState({"task": '', "tasks": tasks});
  }

  handleTaskString = event => {
    this.setState({ [event.target.name]: event.target.value})
  };

  handleTaskDone = (event) => {
    this.setState({ task: event.target.value});
  };
  
  render() {
    return (
    <div>
      <h1>{this.state.title}</h1>
      <MyButton />
      <UserInput />
      
    </div>
    );
  }
}

export default App;
