import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super() 
    this.state = {
      todoList = [],
      newTodo = ""
    }
  }

  addTodo = (event) => {
    event.preventDefault();
    const todos = this.state.todoList;
    todos.push(this.state.newTodo);

    this.setState({
      newTodo: '',
      todoList: todos
    })
  }
}