import React from 'react';

const Todo = (props) => {
    return <h3 onClick={props.completed}>{props.todo}</h3> 
}

export default Todo;