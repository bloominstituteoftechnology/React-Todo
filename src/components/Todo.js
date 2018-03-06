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
      ? {
          textDecoration: "line-through",
          display: "inline",
          margin: "20px"
        }
      : {
          textDecoration: "none",
          display: "inline",
          margin: "20px"
        };
    const buttonStyles = {
      display: "inline"
    };
    return (
      <div style={buttonStyles}>
        {this.props.button}
        <div style={styles} onClick={this.toggleDoneness}>
          {this.props.todo.text}
        </div>
      </div>
    );
  }
}

export default Todo;
