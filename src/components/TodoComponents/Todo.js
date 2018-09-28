import React from 'react';

const Todo = (props) => {
    console.log(props); 
    return(
        <li onClick={(event) => props.toggleClass(event, props.id)} >{props.todo}</li>
    )
}
export default Todo