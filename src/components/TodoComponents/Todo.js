import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div className="todoItem">
      <p style={props.itemStyle} onClick={(event) => props.completeTask(event, props.item.id)}>{props.item.task}</p>
    </div>
  );
};


export default Todo;
