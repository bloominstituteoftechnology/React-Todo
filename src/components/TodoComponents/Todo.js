import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div className="listItem">
      <p onClick={props.toggleItem} className={props.completed === true ? 'completedTrue' : null}>{props.todo}</p>
    </div>
  );
};

export default Todo;
