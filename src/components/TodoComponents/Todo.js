import React from 'react';

const Todo = props => {
    return (
        <h3 
            onClick={() => props.toggleComplete(props.todo.id)}
            className={props.todo.completed.toString()}
        >
            {props.todo.task}
        </h3>
    )
}

export default Todo;