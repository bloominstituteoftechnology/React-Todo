import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.handleCompleted}
        className={this.props.item.completed ? "completed" : ""}
      >
        <p className="todoList">{this.props.item.task}</p>
      </div>
    );
  }
}
