import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return <div>{props.singleTodo.task}</div>
};

export default Todo