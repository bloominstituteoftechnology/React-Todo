import React from "react";
import Todo from "./Todo"

const TodoList = (props) => {
  return(
    <ul>
      {props.todos.map(todo => {
        return <Todo key= {todo.id} todo={todo} />
      // return <li key={todo.id}>{todo.task}</li>
    })}
    </ul>
  )
}

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
