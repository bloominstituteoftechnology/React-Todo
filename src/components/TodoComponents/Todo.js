import React from 'react';
import './Todo.css';


class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.todo = props.todo;
        this.controller = props.controller;
    }

    taskHandlerHelper = (event) => {
      this.controller.taskHandler(event, this.todo);
    };


  render() {
    return (
      <li className={this.todo.completed ? "todo completed" : "todo"}
          onClick={this.taskHandlerHelper} >
        {this.todo.task}
      </li>
    );
  }
}

export default Todo;
