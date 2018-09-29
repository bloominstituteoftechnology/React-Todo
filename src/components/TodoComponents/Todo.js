import React from 'react';
import './Todo.css';


class Todo extends React.Component {

  taskHandlerHelper = (event) => {
    this.props.controller.taskHandler(event, this.props.todo);
  };

  render() {
    return (
      <li className={this.props.todo.completed ? "todo completed" : "todo"}
          onClick={this.taskHandlerHelper} >
        {this.props.todo.task}
      </li>
    );
  }
}

export default Todo;
