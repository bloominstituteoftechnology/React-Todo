import React from "react";
import './Todo.css';
function Todo(props) {
  return <li className={props.todo.completed ? 'completed' : null}
             onClick={() => {props.completeTodo(props.todo.id)}}
             id={props.todo.id}>
             {props.todo.todo}
         </li>;
}
export default Todo;