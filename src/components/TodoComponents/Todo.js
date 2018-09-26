import React from 'react';
import './Todo.css';

const Todo = props => {
   return(
     <li
       onClick={() => props.handler(props.item.id)}
       style={props.item.completed ? {textDecoration: 'line-through'}: null}
     >
       {props.item.task}
     </li>
   )
 }

export default Todo;