import React from 'react';

const Todo = (props) => {
  return(
    <li onClick={() => props.completedTask(props.task.id)}>{props.task.inputText}</li>
  )
}

export default Todo;