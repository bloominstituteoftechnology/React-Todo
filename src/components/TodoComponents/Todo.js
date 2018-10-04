import React from "react";

function Todo(props) { 
  return (
  <div className ="list-items">
        <li onClick={() => props.handleToggle(props.todo.id)}
              style={props.todo.completed ? { textDecoration: 'line-through' } : null}>
              
              {props.todo.task}
              
        </li>
        </div>
  );
}



export default Todo;