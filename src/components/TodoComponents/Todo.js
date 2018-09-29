import React from 'react';

 const Todo = (props) => {

    return(
        <li id={props.id} onClick={ ()=>{props.textStrike(props.id)}} className={ (props.completed ? 'completed' : null)}>
            {props.value}
        </li>
    )
}
 export default Todo;
