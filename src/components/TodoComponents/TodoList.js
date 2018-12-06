import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  //props = { todos: [...] }
  return (
    <ul>
      {props.todos.map(todoObject => {
        return <Todo key={todoObject.id} todo={todoObject} />;
      })}
    </ul>
  );
}

export default TodoList;
