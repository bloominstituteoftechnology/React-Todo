import React from 'react';
import { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  state = {
    tasks: ["Grocery shop", "Drop the kids off forever"],
    newTask: ""
  };

  addTask = (event) => {
    event.preventDefault();
    this.setState({
      newTask: "",
      tasks: [ ...this.state.tasks, this.state.newTask]
    });
    console.log(this.state);
  };

  deleteTask = (event) => {
    event.preventDefault();
    let index = this.tasks.indexOf(event.target.value);
    this.tasks.splice(index, 1);
    this.setState({ items: this.tasks });
  };

  handleToDo = (event) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.tasks.map((newTask, i) => <Todo key={i} item={newTask} />)}
        <form onSubmit={this.addTask}> 
          <input
            type="text"
            onChange={this.handleToDo}
            placeholder="Add task here"
            value={this.state.newTask}
          />
        </form>
      </div>
    );
  }
}

export default TodoList;