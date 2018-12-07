// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo"

const TodoList =props =>{

   return (
       <ul>
           {props.todos.map(todo =>{
               return <Todo key={todo.id}  todo={todo} todoClickFn={props.todoClickFn}/>
           })}

       </ul>

   )


}

export default TodoList
