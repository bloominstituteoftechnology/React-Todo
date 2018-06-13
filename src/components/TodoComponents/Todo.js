import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return <li key = {props.item.id}>{props.item.task}</li>
}

export default Todo;