import React from 'react';
import './Todo.css';

const Todo = (props) => {
  const completedLine = props.item.completed;
	return (
		<li
			onClick={() => props.onMarkComplete(props.item.task, props.item.id)}
			className={completedLine ? 'line' : ''}
		>
			{props.item.task}
		</li>
	);
};

export default Todo;
