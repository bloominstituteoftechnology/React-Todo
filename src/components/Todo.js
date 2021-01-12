import React, { Component } from 'react';
import './Todo.css';

const Todo = props => {
    const handleClick = ()=> {
        props.handleItemToggle(props.id)
    }

    return (
        <div onClick={handleClick} className={`todo${props.toDo.completed ? 'completed': ''}`}>
            <p>{props.toDo.task}</p>
        </div>
    )
}

export default Todo;