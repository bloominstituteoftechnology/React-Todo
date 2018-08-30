import React from "react";

function Todo(props) { 
  return <li >{props.todo.task}</li>;
}

export default Todo;

// onClick={props.handleSingleClickEvent}
// onClick={() => this.props.toggle(this.props.todo.id)}