import React from 'react';

const Todo = props => {
    return (
        <div className="listItem">{props.listItem.task}</div>
    )
}

export default Todo;