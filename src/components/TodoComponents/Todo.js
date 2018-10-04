import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div className="todoItem">
      <p style={props.itemStyle} onClick={() => props.completeTask(props.item.id, EventTarget)}>{props.item.task}</p>
    </div>
  );
};


export default Todo;
