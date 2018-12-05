import React from 'react';
import './Todo.css';

const ToDo= props=>{
    return(
        <li className={props.completed?"task-completed":""} key={props.id.toString()} onClick={props.toggleCompleted} >{props.task}</li>
    )
}

export default ToDo;