import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div onClick={() => this.props.toggleCompleted(this.props.item.id)}>
        <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Todo;
