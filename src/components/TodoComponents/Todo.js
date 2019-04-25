import React from 'react';

const Todo = props => {
    return (
        <div className="toDoBackground">
            <li key={props.task.id}>{props.task.task}</li>
        </div>
    )
}

export default Todo 