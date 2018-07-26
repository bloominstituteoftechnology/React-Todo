import React from 'react';
import './Todo.css';

const Todo = props => {
    const { task } = props.toDoProp
    return <div>{task}</div>;
};


export default Todo;