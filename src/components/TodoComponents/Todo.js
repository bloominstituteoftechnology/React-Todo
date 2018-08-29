import React from 'react';
import './Todo.css';

function Todo(props) {
    return <li>{props.todoItem.task}</li>;
}

export default Todo;
