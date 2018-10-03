import React from 'react';

const Todo = props => {
    return (
        <div onClick={() => props.toggleComplete(props.id)} className="todo-display">
            {props.task}
        </div>

    );
}

export default Todo;