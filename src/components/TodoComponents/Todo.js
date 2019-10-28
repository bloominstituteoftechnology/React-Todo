import React from 'react';

const Todo = props => {
    return (
        <div
            className={`Todo${props.Todo.completed ? ' completed' : ''}`}
            onClick={() => props.toggleCompleted(props.Todo.id)}
        >
            <p>{props.Todo.name}</p>
        </div>
    );
};

export default Todo;