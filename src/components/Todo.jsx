import React, { Component } from "react";

export class Todo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    this.props.markComplete(this.props.todo.id);
  };

  render() {
    return (
      <div>
        <h1
          id="todo"
          style={{
            textDecoration: this.props.todo.completed ? "line-through" : "none"
          }}
          onClick={this.handleClick}
        >
          {this.props.todo.name}
        </h1>
      </div>
    );
  }
}

export default Todo;
