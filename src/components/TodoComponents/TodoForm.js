import React from 'react';

const TodoForm = (props) => {
	return (
		<div>
			<form type="submit" onSubmit={props.onSubmit}>
				<input
					type="text"
					name="todo"
					placeholder="Please Add Todo Here"
					value={props.task}
					onChange={props.submitHandler}
				/>
				<button onClick={props.addTodo}>Add ToDo</button>
				<button onClick={props.completedTodo}>Completed Todo</button>
			</form>
		</div>
	);
};

export default TodoForm;
