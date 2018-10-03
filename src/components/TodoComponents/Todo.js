import React from "react";

function Todo(props) { 
  return (
  
        <li onClick={() => props.handleToggle(props.todo.id)}
              style={props.todo.completed ? { textDecoration: 'line-through' } : null}>
              
              {props.todo.task}
              
        </li>
  );
}



export default Todo;