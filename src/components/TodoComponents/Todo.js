import React from 'react';

const Todo = props => {
    return (
        <div className="listItem" onClick={(event) => props.onClick(event, props.listItem.id)}>{props.listItem.task}</div>
    )
}

export default Todo;