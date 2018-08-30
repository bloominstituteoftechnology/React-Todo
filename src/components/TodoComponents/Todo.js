import React from 'react';

function ToDo(props) {
    return <h2 onClick={() => props.toggleComplete(props.todo.id),} >{props.todo.task}</h2>;
}

export default ToDo;