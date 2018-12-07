import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  // props = { todos: [...], name: "dan"}
  return (
    <ul>
      {props.todos.map(todoObject => {
        return (
          <Todo
            key={todoObject.id}
            todo={todoObject} />
        );
      })}
    </ul>
  );
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
