import React, { Component } from "react";
import Todo from "./Todo";
import Form from "./TodoForm";

class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.tasks.map(task => (
          <Todo todo={task.task} completed={task.completed} id={task.id} />
        ))}
      </div>
    );
  }
}

export default List;
