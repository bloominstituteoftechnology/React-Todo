import React from 'react';
import './Todo.css'

const strikeText = (event) => {
  Array.from(event.target.classList).includes("struck") ? event.target.classList.remove("struck") : event.target.classList.add("struck");
};

function Todo(props) {
  return <li onClick={strikeText}>{props.todo}</li>;
}

export default Todo;