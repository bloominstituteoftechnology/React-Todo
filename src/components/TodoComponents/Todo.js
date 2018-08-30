import React from 'react';
import './Todo.css';

function Todo(props) {
    return <li onClick={props.toggleTodo} className=''>{props.todoItem.task}</li>;
}

export default Todo;
