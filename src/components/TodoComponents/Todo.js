import React from 'react';
import './Todo.css';

const Todo = (props) => {
    // const message = props.todo.completed ? 'done' : 'not done';

    const clickyHandler = () => {
        props.handleClick(props.todo.id)
    }

    return (
        <div>
            <p className='task' onClick={clickyHandler}>{props.todo.task}</p>
        </div>
    )
}

export default Todo;