import React from 'react';

const Todo = props => {
    return (
        <li
            id={props.id}
            className={props.style}
            style={props.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
            onClick={() => props.completeTask(props.id)}
        >
            {props.text}
        </li>
    );
};

export default Todo;
