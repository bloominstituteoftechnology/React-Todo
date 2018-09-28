import React from 'react';
import styles from './Todo.css'

const ToDo = (props) =>{
    
    const divClicker = () =>{
        props.handleClick(props.item.id)

    }
    
    return(
        <div id ={props.id} onClick = {divClicker} className = {props.item.completed ? "completed" : null}>
            <p className = "task">{props.item.task}</p>
        </div>
    )
}

export default ToDo;