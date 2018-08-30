// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list__item-container">
      <Todo
        inputValue={props.inputValue}
        crossTodo={props.crossTodo}
        className={props.className}
      />
    </div>
  );
};
export default TodoList;
