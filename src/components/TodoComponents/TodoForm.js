import React from 'react';

const TodoForm = props => {
	return (
		<form onSubmit={props.handleNew}>
			<input type="text" onChange={props.handleChange} value={props.val} />
			<button>Add New ToDo</button>
		</form>
	);
};

export default TodoForm;
