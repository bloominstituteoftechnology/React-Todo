import React from 'react';

// const Job = props => <h2>I work as a {props.job}</h2>;

const Todo = props => <li onClick={props.handleClick}>{props.todo.task}</li>;

export default Todo
