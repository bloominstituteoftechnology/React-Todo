import React from 'react';

const Todo = props => {
	return (
		<li
			className={`task${props.task.completed ? ' completed' : ''}`}
			onClick={e => props.toggleCompleted(props.task.id)}
		>
			{props.task.name}
		</li>
	);
};

export default Todo;
