import React from 'react';

// Importing COMPONENTS

class Todos extends React.Component {
  render() {
    return this.props.todo.map((todo) => (
      <li>{todo.task}</li>
    ));
  }
}

export default Todos;
