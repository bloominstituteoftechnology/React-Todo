import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {
  render() {
    const {
      task,
      id,
      completed,
    } = this.props;

    return (
      <div key={id} className={completed ? "completed" : ""}>{task}</div>
    );
  }
}

export default Todo;
