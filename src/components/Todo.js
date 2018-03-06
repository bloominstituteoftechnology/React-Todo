import React, { Component } from "react";

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
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };

    return (
      <div style={styles} onClick={this.toggleDoneness}>
        {this.props.button}
        {this.props.todo.text}
      </div>
    );
  }
}

export default Todo;
