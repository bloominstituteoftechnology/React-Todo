import React, { Component } from "react";
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = { todos: ["Do this", "Do that"] };
  }

  render() {
    return (
      this.props.todoList.map((todo, index) => <Todo key={index} todoItem={todo}></Todo>)

    );
  }
}


export default TodoList;
