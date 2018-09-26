import React from 'react';

const Todo = props => {
    return (
        <div data-id={props.id} data-completed={props.completed}>
            {props.task}
        </div>
    )
}

export default Todo;