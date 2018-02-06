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

}
export default TodoList;
