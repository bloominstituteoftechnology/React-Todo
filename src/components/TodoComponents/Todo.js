import React from 'react';

const Todo = ({task, completed}) => {
	// console.log("Todo:", task, completed);
	return (
		<div>
			<h2>Todo</h2>
			<p>Task: {task}</p>
			<p>Completed: {completed.toString()}</p>
		</div>
	)
};

export default Todo;