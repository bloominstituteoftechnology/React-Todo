import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    }
  }

  handleTodoInput = (event) => {
    this.setState({newTodo: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const todo = this.state.newTodo;
    const todos = this.state.todos;
    this.setState({
      todos: [...todos, todo],
      newTodo: ''
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo, index) => {
          return(
            <Todo key={index} todo={todo} />
          );
        })}
        <form onSubmit={this.addTodo}>
          <input onChange={this.handleTodoInput} value={this.state.newTodo} />
        </form>
      </div>
    );
  }
}