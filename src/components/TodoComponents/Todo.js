import React from 'react';

const Todo = props => {
  let style = { cursor: "pointer"};
  if(props.todo.completed) {
    style = {
      textDecoration: "line-through",
      cursor: "pointer"
    }
  }

  return <li className="todo" style={style} onClick={(event) => props.todoClick(event, props.todo.id)}> {props.todo.task} </li>;
};

export default Todo;