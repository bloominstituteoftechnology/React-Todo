import React from "react";

const TodoForm = props => {
	return (
		<form>
			<input
				type='text'
				value={props.task}
				name='task'
				placeholder='What do you need Todo?'
				onChange={props.handleChanges}
			/>
			<button onClick={props.addToList}>Add Todo</button>
			<button onClick={props.updateList}>Clear List</button>
		</form>
	);
};

export default TodoForm;
