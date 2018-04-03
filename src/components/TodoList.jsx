import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  addTodo(e) {
    e.preventDefault();
    this.setState({
      newTodo: !!e.target ? e.target.value : ""
    });
  }

  render() {
    return (
      <div>
        <input />
        {this.state.todos.map((todo, i) => (
          <Todo todo={todo} key={i} onClick={this.addTodo} />
        ))}
      </div>
    );
  }
}

export default TodoList;
