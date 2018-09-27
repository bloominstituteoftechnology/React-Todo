// this is a single ToDo item
import React, { Component } from "react";

import "./ToDoItem.css";

class ToDoItem extends React.Component {
  render() {
    const message = this.props.toDoItem.completed ? 'done' : 'not done'
    return (
      <div onClick={this.props.handleClick}>
      {this.props.ToDoItems.toDoTitle} is {message}
        {/* <ul>
          <li>todo item is here</li>
        </ul> */}
      </div>
    )
  }
}

export default ToDoItem;
