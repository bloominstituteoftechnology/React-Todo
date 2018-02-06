import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      completed: props.completed
    };
  }

  toggle = () => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    const styles = this.state.completed
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
    return (
      <div>
        <div className="Todo">
          <span className="Todo__text" onClick={this.toggle} style={styles}>
            {this.props.todo.text}
          </span>
          <button className="Todo__button" onClick={this.props.delete}>
            X
          </button>
        </div>
      </div>
    );
  }
}
