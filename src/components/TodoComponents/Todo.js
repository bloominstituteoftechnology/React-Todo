import React from 'react';
import { toggleTodo } from '../../utils.js'

const Todo = props => (
    // <h3 onClick={() => props.toggleTodo(props.text)}>{props.text}</h3>
    <h3 onClick={() => toggleTodo(props.text)}>{props.text}</h3>
);

export default Todo;