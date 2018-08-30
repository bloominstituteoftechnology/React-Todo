import React from 'react';

const Todo = props => <p class="" onClick={props.handleClick}>{props.todo.task}</p>;

export default Todo
