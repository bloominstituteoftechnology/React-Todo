import React from "react";

function Todo(props) { 
  return (
  <div className ="list-card" onClick={() => props.handleToggle(props.todo.id)}>
        <li onClick={() => props.handleToggle(props.todo.id)}
              style={props.todo.completed ? { textDecoration: 'line-through' } : null}>
              
             <h1>{props.todo.task}</h1> 
              
        </li>
        </div>
  );
}



export default Todo;