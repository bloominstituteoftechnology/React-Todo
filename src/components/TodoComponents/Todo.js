import React from 'react';
import './Todo.css';

const Todo = props => {
    const { task } = props.toDoProp;
    const {completed} = props.toDoProp;
    return <div className={`${completed ? 'completed' : null }`} onClick={props.completedProp}>{task}</div>;
};


export default Todo;