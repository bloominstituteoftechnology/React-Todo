import React from 'react';

function Todo (props) {       
    console.log(props.task);
    return (
        <li onClick = {props.addComplete} id = {props.task.id}>{props.task.name}</li>
    )
}

export default Todo