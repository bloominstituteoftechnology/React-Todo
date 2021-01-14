import React from 'react';

const Todo = props => {
    
    const handleClick = e => {
        e.preventDefault();
        props.toggleTodo(props.todo.id);
    }

    return (
        <div onClick={handleClick} className={`todo${props.todo.completed ? ' purchased' : ''}`} >
            <p>{props.todo.name}</p>
        </div>
    )
};

export default Todo;