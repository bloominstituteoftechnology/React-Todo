import React from 'react';

const Todo = props => {
    console.log(props)
    return (
        <div
            className={`item ${props.item.completed ? ' completed' : ''}`}

            onClick={() => props.toggleCompleted(props.item.id)}
        >
            {/* <h1>{props.item.completed.toString()}</h1> */}
            <p>{props.item.task}</p>
        </div>
    );
};

export default Todo;