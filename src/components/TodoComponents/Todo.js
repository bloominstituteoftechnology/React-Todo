import React from 'react';

const Todo = (props) => {
	return (
		<li>
			{props.todo.todo} {props.todo.id}
		</li>
	);
};
export default Todo;
