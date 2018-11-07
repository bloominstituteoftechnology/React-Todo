import React from 'react';
import './Todo.css';

const Todo = props => {
    return <p>{props.currentTodo.task}</p>
}

export default Todo;