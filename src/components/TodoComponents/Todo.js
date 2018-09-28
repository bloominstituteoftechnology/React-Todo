import React from 'react';

const Todo = (props) =>{
    return(
        <li onClick={props.finishedHander}>
           {props.value}
        </li>
    )
}

export default Todo;