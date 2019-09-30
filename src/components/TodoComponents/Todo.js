import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class Todo extends Component {
  state = { todo: {} };
  render() {
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
