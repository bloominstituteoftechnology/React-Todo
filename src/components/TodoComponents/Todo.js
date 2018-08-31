import React from "react";

const Todo = props => { 
  return (
  
        <li onClick={() => props.handleToggle(props.todo.id)}
              style={props.todo.completed ? { textDecoration: 'line-through' } : null}>
              
              {props.todo.task}
              
        </li>
  );
}



export default Todo;

// onClick={props.handleSingleClickEvent}
// onClick={() => this.props.toggle(this.props.todo.id)}