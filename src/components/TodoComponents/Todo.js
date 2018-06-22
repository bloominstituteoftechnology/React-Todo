import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return <div onClick= {() => props.completeHandler(props.singleTodo.id)}>{props.singleTodo.task}</div>
};

export default Todo