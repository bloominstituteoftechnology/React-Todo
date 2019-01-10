import React from 'react';

function TodoForm(props) {
	return (
		<form onSubmit={props.addNewTodo}>
			<input
				className="input"
				value={props.todoItem}
				type="text"
				name="todoItem"
				placeholder="Todo"
				onChange={props.handleChanges}
			/>
			<button type="submit">Submit</button>
			<button type="button" onClick={props.handleClear}>
				Clear Completed
			</button>
		</form>
	);
}

export default TodoForm;
