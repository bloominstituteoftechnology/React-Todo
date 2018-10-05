import React from 'react';
import styles from './Todo.css';

const Todo = props => {
	const status = props.completed ? 'done' : 'none';
	return (
		<div className={status} onClick={props.handleClick}>
			{props.task}
		</div>
	);
	// return <div>{props.todo.task}</div>;
};

export default Todo;
