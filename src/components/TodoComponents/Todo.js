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
			<div
				className={`todoLine ${
					props.todo.completed ? 'completed' : null
				}`}>
				<span className="todoItem">{props.todo.task}</span>
				<span className="timestamp">{props.todo.date}</span>
			</div>
		</div>
	);
}

export default Todo;
