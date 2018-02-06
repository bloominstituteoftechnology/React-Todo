import React from 'react';
import "./Todo.css"

const doneItem = (event) => {
  Array.from(event.target.classList).includes("done")
  ? event.target.classList.remove("done")
  : event.target.classList.add("done");
}

function Todo(props) {
  return <li onClick={doneItem}>{props.todo}</li>
}

export default Todo;
