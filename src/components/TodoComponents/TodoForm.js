import React from 'react';

const TodoForm = (props) => {
	return (
		<div>
			<button onClick={props.addTodo}>Add</button>
			<button onClick={props.undo}>Clear</button>
			<input value={props.message} onChange={props.inputText} />
		</div>
	);
};

export default TodoForm;
