import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  input = (event) => {
    this.setState({ newTodo: event.target.value});
  } // uses value from input box to set state with newTodo string.

  add = (event) => {
    const todoList = this.state.todos;
    if (this.state.newTodo) {
      todoList.push(this.state.newTodo);
    }
    // reset
    this.setState({
      newTodo: "",
      todos: todoList
    });
  }

  render() {
    // render with return statement.
  }
}
export default TodoList;
