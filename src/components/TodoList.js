// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      task: '',
      todos: []
    };
  }

  handleTodoChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  addTodo = event => {
    const todos = this.state.todos;
    const task = {
      name: this.state.task,
      id: this.state.todos.length,
      completed: false,
      strikeThrough: function(index) {
        const item = document.getElementById(todos[index].id);
        if (todos[index].completed === true) {
          item.style.textDecoration = "line-through";
        }
        else {
          item.style.textDecoration = "none";
        }
      }
    };
    todos.push(task);
    this.setState({ todos: todos, task: '' });
  }

  render() {
    return (
      <div>
        <Todo todo={this.state.todos} />
        <input name="task" value={this.state.task} placeholder="Enter a new task" onChange={this.handleTodoChange} /><br /><br />
        <button onClick={this.addTodo}>Click to add a new task</button>
      </div>
    )
  }
}

export default TodoList;



