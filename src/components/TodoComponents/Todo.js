import React from 'react';
import './Todo.css';

const Todo = (props) => {
   return (
       <div id={props.id} onClick={ ()=>{props.taskComplete(props.id)}} className={ (props.completed ? 'completed' : null)}>
           {props.value}
       </div>
   )
}
export default Todo;