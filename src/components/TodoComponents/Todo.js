import React from 'react';

const Todo = props => {
    return (
        <h2 onClick={props.markDone}>{props.task}</h2>
    );
}

export default Todo;