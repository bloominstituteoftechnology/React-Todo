import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ['First Task', 'Second Task', 'Third Task'],
      newTask: ''
    };
  }

  addTask = (event) => {
    event.preventDefault();
    const newTasks = this.state.tasks;
    newTasks.push(this.state.newTask);
    this.setState({
      newTask: '',
      tasks: newTasks,
    });
  }

  handleNewTask = (event) => {
    this.setState({newTask: event.target.value})
  }

  // completeTask = () => {

  // }

  render() {
    return (
      <div>
        <h3>Test ToDoList</h3>
        <ul>
          {this.state.tasks.map((task, i) => {
            return (
            <li key={i} className='task'>
              <ToDo task={task} onClick=""/>
            </li>
          )})}
        </ul>
        <form onSubmit={this.addTask}>
          <input type='text' onChange={this.handleNewTask} placeholder='Add new task' value={this.state.addTask} />
        </form>
      </div>
    )
  }
}

export default ToDoList;