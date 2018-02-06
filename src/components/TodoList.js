import React, { Component } from "react";
import Todo from "./Todo/Todo";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: this.getLocalStorage() || [],
      newTodo: { text: "", completed: false }
    };
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem("state"));
  }

  setLocalStorage(storage) {
    localStorage.setItem("state", JSON.stringify(storage));
  }

  handleTodoInput = event => {
    this.setState({
      newTodo: {
        text: event.target.value,
        completed: false
      }
    });
  };

  addTodo = event => {
    event.preventDefault();
    const todo = this.state.newTodo;
    const todos = this.state.todos;
    this.setState({
      todos: [...todos, todo],
      newTodo: { text: "", completed: false }
    });
  };

  deleteTodo(index) {
    return () => {
      this.setState({
        todos: this.state.todos.filter((todo, todoIndex) => {
          return todoIndex !== index;
        })
      });
    };
  }

  setState(newState) {
    super.setState(newState);
    this.setLocalStorage(newState.todos);
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo, index) => {
          return (
            <Todo key={index} todo={todo} delete={this.deleteTodo(index)} />
          );
        })}
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.handleTodoInput}
            value={this.state.newTodo.text}
          />
        </form>
      </div>
    );
  }
}
