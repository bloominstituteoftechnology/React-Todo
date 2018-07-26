import React from 'react';

const Todo = props => {
    // const { task } = props.todoProp;
    return (
        <div>{props.todo.task}</div>
    );
};

export default Todo;