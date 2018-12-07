import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  //props = { todos: [...] }
  return (
    <ul>
      {props.todos.map(todoObject => {
        return (
          <Todo
            key={todoObject.id}
            todo={todoObject}
            toggleCompleted={props.toggleCompleted}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
