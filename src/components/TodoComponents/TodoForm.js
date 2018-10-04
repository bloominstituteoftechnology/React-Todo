import React from 'react';

const TodoForm = props => {
	return (
		<form>
			<input type="text" onChange={props.handleChange} value={props.val} />
			<button>Add New ToDo</button>
			<h1 />
		</form>
	);
};

export default TodoForm;
