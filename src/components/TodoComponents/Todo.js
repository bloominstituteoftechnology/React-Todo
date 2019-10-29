import React, { Component } from 'react';

export default class Todo extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const {
      todo: { id, task, completed },
    } = this.props;
    return (
      <div
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={() => this.props.markComplete(id)}
      >
        {task}
      </div>
    );
  }
}
