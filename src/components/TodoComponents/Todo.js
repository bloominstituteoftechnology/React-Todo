import React from 'react';
import './Todo.css';

const ToDo= props=>{
    return(
        <li  className={`${props.completed?"task-completed":""} list-item`} key={props.id} data-key={props.id} onClick={props.toggleCompleted} >{props.task}</li>
    )
}

export default ToDo;