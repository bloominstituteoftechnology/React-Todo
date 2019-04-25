import React from 'react';

const Todo = props => {
    return (
        <div className="toDoBackground">
            <h1 key={props.task.id}>{props.task.task}</h1>
        </div>
    )
}

export default Todo 