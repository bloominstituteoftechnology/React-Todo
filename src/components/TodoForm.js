import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: []
    };
    this.updateNewTodo = this.updateNewTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
 }

  updateNewTodo(event) {
    this.setState({ newTodo: event.target.value });
  }

  addTodo(event) {
    event.preventDefault();
    console.log(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: this.state.todos.concat(this.state.newTodo)
    });
  }

 render() {
  return (
    <div>
      <form onSubmit={this.addTodo}>
        <input
          onChange={this.updateNewTodo}
          placeholder="New list item"
          value = {this.state.newTodo}
        />
      </form>
      <TodoList todos={this.state.todos} />
    </div>
  );
 }
}

export default TodoForm;