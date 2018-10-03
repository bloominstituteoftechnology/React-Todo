import React from 'react';

const Todo = (props) => {
    return(
        <li id={props.id} onClick={ ()=>{props.crossout(props.id)}} className={ (props.completed ? 'completed' : null)}
            >
            {props.value}
        </li>
    )
}

export default Todo;