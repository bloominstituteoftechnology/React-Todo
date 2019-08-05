import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {
  render() {
    const {
      task,
      id,
      completed,
      toggleDone,
    } = this.props;

    return (
      <div
        data-id={id}
        className={`task ${(completed ? "completed" : "")}`}
        onClick={toggleDone}
      >
        {task}
      </div>
    );
  }
}

export default Todo;
