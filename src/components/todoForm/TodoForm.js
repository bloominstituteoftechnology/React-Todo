import React, { Component } from 'react';
import TodoList from '../todos/TodoList.js';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
  }
  addTodo(event) {
    event.preventDefault();
    const todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({newTodo: ''});
    this.setState({todos});
  }
  handleTodoChange(event) {
    this.setState({newTodo: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input 
          id="todoInput" 
          onChange={this.handleTodoChange} 
          placeholder="...add todo" 
          type="text" 
          value={this.state.newTodo}
        />
        <TodoList todos={this.state.todos} />
      </form>
    )
  }

}

export default TodoForm;
