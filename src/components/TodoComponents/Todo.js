import React from "react";
import "./Todo.css";

const Todo = props => {
  //   console.log(props.item.id);
  return (
    <div
    style={props.item.completed ? { textDecoration: 'line-through'} : null}
      onClick={() => props.toggleCompleted(props.item.id)}
    >
      {props.item.task}
    </div>
  );
};

export default Todo;
