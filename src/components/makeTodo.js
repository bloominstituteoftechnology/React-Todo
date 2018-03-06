import React, { Component } from 'react';
import makeTodo_Complete from './makeTodo_Complete'

class makeTodo extends Component {
  constructor () {
    super();

    this.state = {
      tasksTodo: ["first task","second task"],
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
        {this.state.tasksTodo.map(task => <makeTodo_Complete done={task} />)}
        <form onSubmit={this.addTask}>
          <input type="text" onChange={this.handleTaskInput} placeholder="Add new task" value={this.state.newTask} />
        </form>
      </div>
    );
  }

}

export default makeTodo;