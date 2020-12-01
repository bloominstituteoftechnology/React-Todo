import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div
        onClick={this.onClick}
        className={this.props.item.completed ? "completed" : "active"}
      >
        <p className="todoList">{this.props.item.task}</p>
      </div>
    );
  }
}
