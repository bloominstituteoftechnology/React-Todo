import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li>{this.props.todo.task}</li>
    )
  }
}

export default Todo;