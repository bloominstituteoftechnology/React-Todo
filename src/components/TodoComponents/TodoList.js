import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  // do more stuff here
  return (
    <div>
      {props.todoList.map((todo, index) => {
         <Todo key={index} todoTD={todo} />;
      })}
    </div>
  );
  // this won't get touched
}

export default TodoList;
