import React from 'react';
import './Todo.css';


class Todo extends React.Component {
  constructor(props) {
    super();

    this.state = {
      controller: props.controller
    };
  }

  render() {
    return (
      <div className="todo">
      </div>
    );
  }
}

export default Todo;
