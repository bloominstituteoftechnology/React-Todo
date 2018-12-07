import React from 'react';
import './Todo.css';


const Todo = props => {
  return (
    <div 
     onClick={props.toggle} 
     className={`todo-item${props.todo.completed ? ' completed' : ''}${props.todo.searched ? ' searched' : ''}`} 
     data-id={props.todo.id}
    >

      {props.todo.task}

    </div>  
  )
}

export default Todo;