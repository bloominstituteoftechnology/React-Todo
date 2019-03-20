import React from "react";

const TodoForm = props => {
	return (
		<form>
			<input
				type='text'
				value={props.task}
				name='task'
				placeholder='Title of Task'
				onChange={props.handleChanges}
			/>
			<input
				type='text'
				value={props.taskDetail}
				name='taskDetail'
				placeholder='Task Details'
				onChange={props.handleChanges}
			/>
			<button onClick={props.addToList}>Add Todo</button>
			<button onClick={props.clearCompleted}>Clear List</button>
		</form>
	);
};

export default TodoForm;
