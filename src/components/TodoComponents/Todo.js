import React from 'react';

const Todo = props => {
    return (
        <div className="listItem" onClick={(event) => props.toggleCompleted(event, props.listItem.id)}>{props.listItem.task}</div>
    )
}

export default Todo;