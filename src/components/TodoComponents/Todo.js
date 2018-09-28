import React from 'react';


const Todo = (props) => {
    return(
        <li onClick={props.crossout}>
            {props.value}
        </li>
    )
}

export default Todo;

