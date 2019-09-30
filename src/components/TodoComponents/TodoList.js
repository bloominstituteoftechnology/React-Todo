// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoList = props => {
  return (
    <ul>
      {props.todos
        ? props.todos.map((todo, index) => (
            <li key={index} onClick={() => props.markCompleted(todo.id)}>
              {todo.todoValue}
            </li>
          ))
        : null}
    </ul>
  );
};

export default TodoList;
