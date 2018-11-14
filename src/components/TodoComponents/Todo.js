import React from 'react';

const Todo = props => {
    return (
        <h2 className={props.completed ? 'line-through' : ''}>{props.task}</h2>
    );
}

export default Todo;
