import React from 'react';

const Todo = (props) => {
    return (
        <div 
        onClick= {() => props.toggleTask(props.todo.id)}
        className={`task${props.todo.completed ? " completed" : ""}`}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;