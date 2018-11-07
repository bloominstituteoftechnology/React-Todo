import React from 'react';

const Todo = props => {
    return (
        <h1> {props.todo.task}</h1>
    );
}

export default Todo