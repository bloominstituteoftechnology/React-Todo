import React from 'react';
import './Todo.css';

function Todo (props) {
    return <li>{props.todo.inputText}</li>;
}

export default Todo;