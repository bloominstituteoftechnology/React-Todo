import React from 'react';

const Todo = (props) => {
	console.log("Todo:", props);
	return (
		<div onClick={() => props.completeTodo(props.id)}>
			<h2>Todo</h2>
			<p>Task: {props.task}</p>
			<p>Completed: {props.completed.toString()}</p>
		</div>
	)
};

export default Todo;