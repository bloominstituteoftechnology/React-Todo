import React from 'react';
import './Todo.css';


const Todo = props => {
  return (
    <div 
     onClick={e => props.toggle(e)} 
     className={`todo-item${props.todo.completed ? ' completed' : ''}`} 
     data-id={props.todo.id}
    >

      {props.todo.task}

    </div>  
  )
}

export default Todo;