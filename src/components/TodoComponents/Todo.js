import React from "react";

const Todo = props => {
  return (
    <div className="todo-item">
      <span className={props.completed + "-span"}>✔</span>
      <div
        onClick={props.toggleComplete}
        //this className will either be set to 'complete' or 'incomplete' depending on what
        //was passed from the ternary operator in TodoList
        className={props.completed}
        id={props.id}
      >
        {props.task}
      </div>
    </div>
  );
};

export default Todo;
