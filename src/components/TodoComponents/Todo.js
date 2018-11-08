import React from 'react';
import './Todo.css';

function Todo(props){
    return(
         <div
         onClick={() => props.markComplete(props.todo.id)}
         className={`todo ${props.todo.completed}`}
         >
         {props.todo.task}
         </div>
    );
} 
export default Todo