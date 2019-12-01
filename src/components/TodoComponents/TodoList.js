import React from "react";
import ToDo from "./ToDo"


const ToDoList = props => {
  console.log(props)
  return (
    <div>
      {props.todos.map(todo => (
        <ToDo
          todo={todo}
          key={todo.id}
          handleToggleCompleted={props.handleToggleCompleted}
        />
      ))}
    </div>
  )
}

export default ToDoList;