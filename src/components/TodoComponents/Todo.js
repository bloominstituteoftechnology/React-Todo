import React from 'react';

function ToDo(props){
    return (
        <li onClick={ () => props.toggleComplete(props.toDo.id)}
        className={ props.toDo.completed ? "completed" : "" }
        >
         {props.toDo.task}
        </li>
    )
}

export default ToDo;