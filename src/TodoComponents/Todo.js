import React from 'react';

const Todo = ({ item, toggleCompleted }) => {
	return (
		<div
			onClick={() => toggleCompleted(item.id)}
			className={`item ${item.completed ? 'completed' : ''}`}
		>
			<p>{item.task}</p>
		</div>
	);
};

export default Todo;
