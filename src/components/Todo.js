import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <div
        className={this.props.todo.completed ? 'completed' : ''}
        onClick={() => this.props.toggleTodo(this.props.todo.id)}
      >
        <p>{this.props.todo.todo}</p>
      </div>
    );
  }
}
