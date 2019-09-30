import React from 'react';

const Todo = props => {
    // console.log('HOw is it working', props)
    return (
        <div
            className={`item${props.todo.completed ? ' completed' : ''}`}
            onClick={() => props.toggleItem(props.todo.id)}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;