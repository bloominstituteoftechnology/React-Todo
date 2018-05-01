import React from 'react';
import TodoList from './components/TodoList'

// Create App Class that extends component
// State will be holding an empty string for each item entered
// Empty Array that we will push individual objects such as text content and completed Boolean (T/F)
// Todo Handler that will hold the typing event
// Add submit event <button>
// onComplete Handler
// Clear Handler
// Render React Statement

import React, { Component } from 'react';
import TodoList from './components/TodoList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todos: []
    };
  }

  todoInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitTodo = event => {
    event.preventDefault();
    const { todos } = this.state;
    const myTodo = { text: this.state.todo, completed: false };
    todos.push(myTodo);
    this.setState({ todos, todo: ''});
  };

  completedTodo = childTodo => {
    const { todos } = this.state;
    todos.forEach(todo => {
      if (todo.text === childTodo.text) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({ todos });
  };

  clearTodos = () => {
    const { todos } = this.state;
    const completedTodos = todos.filter(todo => todo.completed === false);
    this.setState({ todos: completedTodos });
  };

  render() {
    return (
      <div>
        <h1>TODO LIST:</h1>
        <form onSubmit={this.submitTodo}>
          <input
            type="name"
            placeholder="Add Todo Item"
            name="todo"
            value={this.state.todo}
            onChange={this.todoInput}
          />
          <button type="submit">Add Item</button>
        </form>
        <button onClick={this.clearTodos}>Clear Completed Items</button>
        <TodoList
          completeTodo={this.completedTodo}
          todos={this.state.todos}
        />
      </div>
    )
  }
}

export default App;
