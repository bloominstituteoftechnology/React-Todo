import React from 'react';

const Todo = (props) => {
    return(
        <li onClick={(event) => props.toggleClass(event, props.id)} className={props.completed===true?"completed" : null}>{props.todo}</li>
    )
}
export default Todo