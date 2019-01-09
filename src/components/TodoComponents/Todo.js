import React from 'react';

const Todo = props => {
	return (
		<div>
			{props.todo.map(el => (
				<div key={el.id}>{el.task}</div>
			))}
		</div>
	);
};

export default Todo;
