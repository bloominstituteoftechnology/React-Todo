import React from 'react';
import { Component } from 'react';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      list: ['buy food', 'workout', 'check mail'],
      newTask: ''
    };
  }

  addNewTask = (event) => {
    event.preventDefault();
    const list = this.state.list;
    list.push(this.state.newTask);
    this.setState({
      newTask: '',
      list: list
    })
  };

  handleNewTaskInput = (event) => {
    this.setState({ newTask: event.target.value })
  }

  render() {
    return (
      <div>
        {this.state.list.map(name => <div>{name}</div>)}
        <form onSubmit ={this.addNewTask}>
          <input type='text' onChange={this.handleNewTaskInput} placeholder='Add a new task' value={this.state.newTask} />
        </form>
      </div>
    );
  }
}

const App = () => (
  <div>
    <h2>Todo App</h2>
    <TodoList />
  </div>
);

export default App;
