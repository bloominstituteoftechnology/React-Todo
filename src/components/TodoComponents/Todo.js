import React from 'react';
import './Todo.css';

const Todo = props => {

    return (<li>{props.value}</li>);
}

export default Todo;