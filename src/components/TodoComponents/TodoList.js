import React from "react";

const TodoList = (props) => {
  return(
    <ul>
      {props.todos.map((todo) => {
      return <li key={todo.id}>{todo.task}</li>
    })}
    </ul>
  )
}

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
