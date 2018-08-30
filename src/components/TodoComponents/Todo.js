import React from 'react';

const Todo = props => <p class="todo" onClick={props.handleClick}>{props.todo.task}</p>;

export default Todo
