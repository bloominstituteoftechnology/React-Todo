import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
    {props.todos.map(x =>
      <Todo key={x.id} todo={x.task}  />
    )}
    </div>
  );

}

export default TodoList;
