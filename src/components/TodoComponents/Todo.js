import React from 'react';
import './Todo.css'

function Todo(props) {
    return (
        <div onClick={(event) => props.changeText(event, props.index)} className={`pointer`}>
            {props.todo.task}
        </div>
    )
}

export default Todo;