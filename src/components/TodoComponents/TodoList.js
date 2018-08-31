import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <Todo
            handleToggleComplete={props.handleToggleComplete}
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
