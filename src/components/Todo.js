import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>{this.props.children[3]}</div>
    );
  }
}

export default Todo;
