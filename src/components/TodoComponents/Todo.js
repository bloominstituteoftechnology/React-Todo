import React from 'react';

const Todo = props => {
    const message = props.todo.completed ? 'done' : 'not done';
    const clickHandler = () => {
        props.handleComplete(props.todo.id)
    }
    return (
        <li onClick={clickHandler}>
            {props.todo.task} is {message}
        </li>
    )
}

export default Todo;