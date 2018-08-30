import React from 'react';

const trueStyle = {
  textDecoration: "line-through"
}

function Todo(props) {

  return(
    <p style={props.todo.completed ? trueStyle: null} onClick={props.completed} >{props.todo.task}</p>
  );
}

export default Todo;