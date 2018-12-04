import React from 'react';
import './Todo.css';

const ToDo= props=>{
    console.log(props)
    return(
        <li className={props.completed?"task-completed":""} key={props.id} >{props.task}</li>
    )
}

export default ToDo;