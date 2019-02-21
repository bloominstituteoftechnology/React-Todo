import React from 'react';

const Todo = props => {
    return (
        <div
        style={props.todo.completed ? { textDecortaion: 'line-through'} : null}
        onClick={() => props.handleToggleComplte(props.todo.id)}
        >{props.todo.task}</div>
    )
}

export default Todo;



