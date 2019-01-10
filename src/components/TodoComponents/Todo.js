import React from 'react';

const Todo = props => {
	return (
		<div className="todo">
			<div
				className={props.todo.completed ? 'complete' : null}
				onClick={() => props.toggle(props.todo.id)}>
				{props.todo.task}
			</div>
		</div>
	);
};

export default Todo;
