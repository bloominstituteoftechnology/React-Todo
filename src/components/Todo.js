import React from 'react';

const Todo = props => {
	return (
		<div
			onClick={() => props.toggleTodo(props.todo.id)}
		>
			<p className = "todos">{props.todo.task}</p>
		</div>
	);
};

export default Todo;