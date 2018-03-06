import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.todo.text,
      completed: this.props.completed,
      key: this.key
    };
  }
  toggleDoneness = () => {
    this.setState({ completed: !this.state.completed });
  };
  render() {
    const styles = this.state.completed
      ? {
          textDecoration: "line-through"
        }
      : {
          textDecoration: "none"
        };

    return (
      <div class="todo-wrapper">
        {this.props.button}
        <p style={styles} onClick={this.toggleDoneness}>
          {this.props.todo.text}
        </p>
      </div>
    );
  }
}

export default Todo;
