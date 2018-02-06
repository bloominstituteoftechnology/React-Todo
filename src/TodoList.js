import React from 'react';
import { Component } from 'react'
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  render() {
    return (
      <div>
        <ul>{this.state.todos.map((todo, i) => {
          return <Todo key={i} text={todo} />
        })}</ul>
        <form onSubmit={this.addNewTodo} onChange={this.updateTodo}>
          Add new todo:<br /><br />
          <input id="input" type="text" placeholder="New todo" /><br /><br />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }

  updateTodo = (event) => {
    this.setState({
      todos: this.state.todos,
      newTodo: event.target.value,
    });
  };

  addNewTodo = (event) => {
    event.preventDefault();
    const todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({
      todos,
      newTodo: '',
    });
    document.getElementById('input').value = '';
  };
}

export default TodoList;
