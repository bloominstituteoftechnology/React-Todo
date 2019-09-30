import React from 'react';

const Todo = props => {
    return (
        <div>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Todo;