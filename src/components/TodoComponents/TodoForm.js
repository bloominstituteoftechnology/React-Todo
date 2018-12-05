import React from 'react';

const TodoForm = (props) => {
	return (
		<div>
			<form onSubmit={props.addTodo}>
				<button> Add</button>
				<button onClick={props.undo}>Clear</button>
				<input value={props.message} onChange={props.inputText} />
			</form>
		</div>
	);
};

export default TodoForm;
