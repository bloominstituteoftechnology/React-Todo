import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = { todos: ["Do this", "Do that"] };
  }

  render() {
    return (
      this.state.todos.map((todo, index) => <div key={index}>{todo}</div>)

    );
  }
}


export default TodoList;
