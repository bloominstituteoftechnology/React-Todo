import React from 'react';

import './Todo.css';

function Todo(props) {
	return (
		<div className="todo">
			<input
				type="checkbox"
				name={props.todo.id}
				onClick={() => props.handleCheckbox(props.todo.id)}
			/>
			<div className={props.todo.completed ? 'completed' : null}>
				{props.todo.task} -{' '}
				<span className="timestamp">{props.todo.date}</span>
			</div>
		</div>
	);
}

export default Todo;
