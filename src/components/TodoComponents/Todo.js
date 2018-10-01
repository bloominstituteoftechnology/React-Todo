import React from 'react';

const strikeStyle = {
  textDecoration: "line-through"
}

const Todo = (props) => {
  return(
    <li 
      style={props.task.completed ? strikeStyle : null}
      onClick={() => props.completedTask(props.task.id)}>{props.task.inputText}
    </li>
  )
}

export default Todo;