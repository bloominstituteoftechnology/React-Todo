import React from 'react';

const Todo = props => {
    return (
        <div>{props.item.task}</div>
    );
};

export default Todo;