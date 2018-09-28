import React from 'react';
import './Todo.css';

const Todo = (props) => {

    const clickyHandler = () => {
        props.handleClick(props.todo.id)
    }

    return (
        <div>
            <p className={props.todo.completed ? 'completed' : 'incomplete'} onClick={clickyHandler}>{props.todo.task}</p>
        </div>
    )
}

export default Todo;