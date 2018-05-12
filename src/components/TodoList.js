// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      title: "To Do List",
      newTodo: '',
      todos: [],
      error: false
    };
  }

  handleTodoChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addTodo = () => {
    if (this.state.newTodo === '') {
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 3000);
    }
    else {
      const todos = this.state.todos;
      const newTodo = {
        name: this.state.newTodo,
        id: this.state.todos.length,
        completed: false,
        strikeThrough: function (index) {
          const item = document.getElementById(todos[index].id);
          if (todos[index].completed === true) {
            item.style.textDecoration = "line-through";
          }
          else {
            item.style.textDecoration = "none";
          }
        }
      };
      todos.push(newTodo);
      this.setState({ todos: todos, newTodo: '' });
    }
  }

  render() {
    return (
      <div>
        <input name="newTodo" value={this.state.newTodo} placeholder="Enter a new todo item" onChange={this.handleTodoChange} /><br /><br />
        <button onClick={this.addTodo}>Click to add a new todo</button>
        <h2>{this.state.title}</h2>
        {this.state.error ? <div>Cannot submit an empty text for a todo item</div> : null}
        <Todo todo={this.state.todos} />
      </div>
    )
  }
}

export default TodoList;



