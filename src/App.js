import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList';
import Todo from './Todo';
import Complete from './TaskComplete.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      tasks: ['eat', 'bathe', 'clean']
    };
  }

  addNewTask = (x) => {
    this.setState({ [x.target.name]: x.target.value });
  };

  submitNewTask = () => {
    const { tasks } = this.state;
    tasks.push(this.state.newTask);
    this.setState({tasks, newTask: '' });
  };

  render() {
    return(
  <div>
  <h2> Anthony's To-Do List! </h2>
  <TodoList tasks={this.state.tasks} />
  <div><Complete/></div>
  <input
  type='text'
  name='newTask'
  value={this.state.newTask}
  placeholder='Add A New Task'
  onChange={this.addNewTask}/>

  <button onClick={this.submitNewTask}><Todo text='Add Task'/></button>
  <button onClick={this.submitNewTask}><Todo text='Reset List'/></button>


  </div>
    );
  }
};

export default App;
