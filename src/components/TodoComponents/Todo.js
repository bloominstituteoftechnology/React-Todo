import React from 'react';

function Todo(props) {
  return <li onClick={props.toggleComplete}>{props.todo.task}</li>;
}

export default Todo;
