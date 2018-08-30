import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list-item-container">
      <Todo
        inputValue={props.inputValue}
        crossTask={props.crossTask}
        className={props.className}
      />
    </div>
  );
};
export default TodoList;
