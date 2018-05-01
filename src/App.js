import React, { Component } from 'react';
import AddButton, { AddField } from './components/component.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'To Do',
      task: '',
      tasks: []
    }
  }

  handleAddTask = () => {
    let tasks = this.state.tasks;
    tasks.push(this.state.task);
    this.setState({"task": '', "tasks": tasks})
  }

  handleTaskType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }



  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <AddButton onClick={this.handleAddTask}/>
        <AddField name="task" onChange={this.handleTaskType} value={this.state.task} />
      </div>
    );
  }
}

export default App;
