import React from 'react';
import './Todo.css';


 const Todo = (props) => {
     return(
         <li className={props.value.completed ? "completed" : null} onClick={() => props.handleClick(props.value.id)}>
             {props.value.task}
         </li> 
     )
 }

 export default Todo;