import React, { Component } from "react";
import Todo from "./Todo.js";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ""
    };
  }
  handleTodoInput = event => {
    this.setState({ newTodo: event.target.value });
  };
  addTodo = event => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({ newTodo: "", todos: todoList });
  };
  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => <Todo key={i} item={todo} />)}
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={this.handleTodoInput}
            placeholder="Add a New ToDo"
            value={this.state.newTodo}
          />
        </form>
      </div>
    );
  }
}

export default TodoList;
