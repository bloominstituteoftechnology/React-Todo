import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
