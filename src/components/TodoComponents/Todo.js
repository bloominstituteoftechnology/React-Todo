import React from 'react';

const Todo = (props) => {
    return (
        <li onClick={() => props.toggleClass(props.id)} className={props.completed ? "completed" : null}>{props.todo}</li>    
        
    )
};

export default Todo;