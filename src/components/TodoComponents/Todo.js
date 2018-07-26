import React from 'react';
import './Todo.css';

const Todo = props => {
    const { task } = props.toDoProp
    return <div onClick={props.completedProp}>{task}</div>;
};


export default Todo;