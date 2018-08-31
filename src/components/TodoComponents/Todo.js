import React from "react";
import "./Todo.css";
class Todo extends React.Component {
  //check if completed is true
  //add completed  class to element if true
  render() {
    {
      console.log(this.props.items.completed);
    }
    return (
      <li
        onClick={() => this.props.itemCompleted(this.props.items.id)}
        id={this.props.items.id}
        className={`todo-item ${this.props.items.completed ? "completed" : ""}`}
      >
        {this.props.items.task}
      </li>
    );
  }
}

export default Todo;
