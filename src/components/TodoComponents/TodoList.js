import React from "react";
import Todo from "./Todo"
import "./Todo.css"


const TodoList = (props) => {
  return(
    <ul>
      {props.todos.map(todo => {
        
        // console.log(props.crossOut);
        return <Todo 
        
        crossOut = {props.crossOut}
        clear = {props.clear}
        key= {todo.id} 
        todo={todo} />
    })}
    </ul>
  )
}

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
