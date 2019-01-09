import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="todo-item">
        {this.props.listItem['task']}
      </div>
    );
  }
}

export default Todo;