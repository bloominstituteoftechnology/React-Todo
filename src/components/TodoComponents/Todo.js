import React from 'react';

const ToDo = (props) =>{
    const message = props.completed ? 'done': 'not done'
    const divClicker = () =>{
        props.handleClick(props.item.id)

    }
    
    return(
        <div id ={props.id} onClick = {divClicker} className = {props.item.completed ? "completed" : null}>
             {props.item.task} is {message}
        </div>
    )
}

export default ToDo;