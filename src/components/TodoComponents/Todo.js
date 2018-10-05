import React from 'react';
import styles from './Todo.css';

const Todo = props => {
	const status = props.task.completed ? 'done' : 'none';
	return (
		<div
			id={props.task.id}
			className={status}
			onClick={() => props.handleClick(props.task.id)}
		>
			{props.task.task}
		</div>
	);
	// return <div>{props.todo.task}</div>;
};

export default Todo;
