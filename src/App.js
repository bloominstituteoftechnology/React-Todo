import React from 'react';
import {Component} from 'react';
import AddButton, { ListView } from './components/component.js';
//I combined 2 components into 1 folder and imported them together.
//The syntax is weird to export 2 components
import AddField from './components/AddField.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Derrick\'s To Do',
      task: '',
      tasks: []
    }
  }

  handleAddTask = () => {
    let tasks = this.state.tasks;
    tasks.push(this.state.task);
    this.setState({"task": '', "tasks": tasks});
  }

  handleTask = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleTaskDone = (index) => {
    let tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({"tasks": tasks});
  }


  render() {
    return (
      <div>
        <h1 className='header'>{this.state.title}</h1>
        <AddField name="task" onChange={this.handleTask} value={this.state.task} />
        <AddButton onClick={this.handleAddTask} />
        <ListView onClick={this.handleTaskDone} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;