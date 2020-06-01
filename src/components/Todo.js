import React from 'react';

const Todo = props => {
    return(
        <div 
        onClick={() => props.toggleComplete(props.todo.id)}
        className={`todo${props.todo.completed ? ' completed' : ''}`}
        >
            <p>{props.todo.task}</p>
        </div>
    )
};

export default Todo;