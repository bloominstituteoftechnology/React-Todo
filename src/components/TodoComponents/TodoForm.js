import React from 'react';

const TodoForm = props => {
	return (
		<form>
			<input
				value={props.todoInput}
				type="text"
				name="todo"
				onChange={props.handleChange}
				placeholder="Enter Task"
			/>
			<button onClick={props.addTodo}>Add Todo</button>
		</form>
	);
};

export default TodoForm;
