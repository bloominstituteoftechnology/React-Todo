import React from 'react';

const TodoForm = props => {
	return (
		<form>
			<input value={props.inputText} onChange={props.changeUserInput} />
			<button onClick={props.addToList}>Add Item</button>
		</form>
	);
};

export default TodoForm;
