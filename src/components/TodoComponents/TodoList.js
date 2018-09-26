import React from 'react';
import './Todo.css';


class TodoList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      controller: props.controller
    };
  }

  render() {
    return (
      <div className="todo-list">
      </div>
    );
  }
}

export default TodoList;
