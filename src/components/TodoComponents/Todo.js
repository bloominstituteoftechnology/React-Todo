import React from "react";

function Todo(props) {
  console.log(props.taskRead);

  return <li onClick={document.querySelector('li').classList.toggle('underline')}>{props.taskRead}</li>;
}

export default Todo
