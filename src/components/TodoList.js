// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {
    // declare your `class`
    constructor() {
      // build out your `constructor`
      super();
      this.state = {
        // state is the data that our component will work with.
        title: 'To Do List:',
        task: '',
        tasks: [],
      };
    }

    handleNameChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }; 

    handleSubmitChar = () => {
        // take this.state.char add it to an array
        // this.setState() to replace the old array
        const tasks = this.state.tasks;
        const task = { name: this.state.task, bool: false, id: this.state.task + tasks.length, };
        tasks.push(task);
        this.setState({ tasks: tasks, task: '' });
    };

    render() {
        return (
          <div>
            <h1>{this.state.title}</h1>
            <ToDo tasks={this.state.tasks} />
            <input
              name="task"
              onChange={this.handleNameChange}
              value={this.state.task}
              placeholder="Add task here"
            />
            <button onClick={this.handleSubmitChar}>Add Task</button>
          </div>
        );
      }
}

export default ToDoList;