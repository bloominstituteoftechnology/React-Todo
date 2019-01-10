import React from 'react';
import './Todo.css';

const TodoForm = props => {
	return (
		<form className="todo-form">
			<input
				value={props.todoInput}
				type="text"
				name="todo"
				onChange={props.handleChange}
				placeholder="Enter Task"
			/>
			<button onClick={props.addTodo}>Add Todo</button>
			<button onClick={props.clearCompleted}>Clear Completed</button>
		</form>
	);
};

export default TodoForm;
