import React from 'react';
import './Todo.css';

const Todo = props => {
    
    return <p onClick={props.todoCompleted} id={props.currentTodo.id}>{props.currentTodo.task}</p>
}

export default Todo;