import React, { Component } from 'react';

class ToDo  extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({newTask: event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();
    const tasks = this.state.tasks;
    tasks.push(this.state.newTask);
    this.setState({
      tasks: tasks,
      newTask: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.newTask} placeholder="Add Task..."/>
        </form>
        <ul>
          {
            this.state.tasks.map((task, i) => {
              return <li key={i + 1}>{task}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default ToDo;