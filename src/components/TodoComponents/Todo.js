import React from "react";
import './Todo.css';

class Todo extends React.Component {

  handleToggleTask = (event) => {
    this.props.toggleTask(this.props.taskId)
  }

  render() {
    return (
      <li id={this.props.taskId} onClick={this.handleToggleTask} className={this.props.completed.toString()}>{this.props.taskItem}</li>
    )
  }
}

export default Todo;