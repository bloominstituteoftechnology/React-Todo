import React from 'react';

const TodoForm = (props) => {
	return (
		<div>
			<form type="submit" onSubmit={props.onSubmit}>
				<input
					type="text"
					value={props.task}
					placeholder="Please Add Todo Items Here"
					onChange={props.todoChange}
				/>
				<button type="submit">Add ToDo</button>
				<button onClick={() => props.deleteTodo}> Completed Todo</button>
			</form>
		</div>
	);
};

export default TodoForm;
