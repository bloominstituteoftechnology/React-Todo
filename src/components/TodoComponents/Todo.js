import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.toggleComplete(this.props.item.key)}
        className={this.props.item.completed ? "complete" : null}
      >
        {this.props.item.text}
      </li>
    );
  }
}
