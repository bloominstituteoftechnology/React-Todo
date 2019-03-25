import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <li>{this.props.todo}</li>
    )
  }
}

export default Todo;