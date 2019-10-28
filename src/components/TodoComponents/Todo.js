import React from 'react';

const Todo = props => {
    console.log(props)
    return (
        <div
            className={`Todo${props.item.completed ? ' completed' : ''}`}

            onClick={() => props.toggleCompleted(props.item.id)}
        >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;