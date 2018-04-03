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

  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => <Todo key={i} todo={todo} />)}
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={this.newInput}
            placeholder="Add To List"
            value={this.state.newTodo}
          />
        </form>
      </div>
    );
  }

  newInput = event => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = event => {
    const list = this.state.todos;
    list.push(this.state.newTodo);
    this.setState({ newTodo: "", todos: list });
  };

}

export default TodoList;