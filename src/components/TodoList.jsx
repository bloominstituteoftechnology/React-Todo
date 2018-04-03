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

  update() {
    this.setState({
      todos: this.state.newTodo.length
        ? [...this.state.todos, this.state.newTodo]
        : [...this.state.todos],
      newTodo: ""
    });
  }

  addTodo(e) {
    e.preventDefault();
    this.update();
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
