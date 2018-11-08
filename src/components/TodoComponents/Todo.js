import React from 'react';
import './Todo.css';

function Todo(props){
    return(
         <h3
         onClick={() => props.markComplete(props.todo.id)}
         className={`${props.todo.completed}`}
         >
         {props.todo.task}
         </h3>
    );
} 
export default Todo