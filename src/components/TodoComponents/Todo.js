import React, { Component } from "react";
import Form from "./TodoForm";
import List from "./TodoList";

class Todo extends Component {
  render() {
    return <ul>{this.props.todo}</ul>;
  }
}

export default Todo;
