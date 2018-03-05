import React, { Component } from 'react';

class makeTodo extends Component {
  constructor () {
    super();

    this.state = {
      tasksTodo: [],
      newTask: ''
    };
  }

  addTask = (event) => {
    event.preventDefault();
    const myTodoList = this.state.tasksTodo;
    myTodoList.push(this.state.newTask);
    this.setState({
      newTask: '',
      tasksTodo: myTodoList
    });
  };

  handleTaskInput = (event) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.tasksTodo.map(task => <div>{task}</div>)}
        <form onSubmit={this.addTask}>
          <input type="text" onChange={this.handleTaskInput} placeholder= "Add new task" value={this.state.newTask} />
        </form>
      </div>
    );
  }

}

export default makeTodo;