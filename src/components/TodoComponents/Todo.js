import React from 'react';

const Todo = (props) => {
  let style = { cursor: "pointer"};

  if(props.todo.completed) {
    style = {
      textDecoration: "line-through",
      cursor: "pointer"
    }
  }

  return(
    <ul className={"todo"}
        style={style}
        key={}
        onClick={(event) => props.toDoClick(event, props.todo.id)}> 
      {props.todo.task}
    </ul>
  )
}

export default Todo;