import React from 'react';

const Todo = props => {
    const { task, id } = props.todo;
    return (
        <div>{task}</div>
    );
};

export default Todo;