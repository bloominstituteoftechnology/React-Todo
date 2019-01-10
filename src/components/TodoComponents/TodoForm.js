import React from 'react';

const TodoForm = props => {
	return (
		<form className="todo-form">
			<input
				className="todo-input"
				value={props.todoInput}
				type="text"
				name="todo"
				onChange={props.handleChange}
				placeholder="Enter Task"
			/>
			<div className="buttons">
				<button className="add-btn" onClick={props.addTodo}>
					Add
				</button>
				<button className="clear-complete" onClick={props.clearCompleted}>
					Clear
				</button>
			</div>
		</form>
	);
};

export default TodoForm;
