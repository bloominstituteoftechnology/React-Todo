import React from 'react';
import './Todo.css';

/* <Todo /> is a component that takes in the todo data and displays the task to the screen. */


const Todo = props => {
    const {task} = props.toDoProp;
    const {completed} = props.toDoProp;
    return <div className={`${completed ? 'completed' : null }`} onClick={props.completedProp}>{task}</div>;
};


export default Todo;

