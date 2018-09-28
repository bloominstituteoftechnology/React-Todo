import React from 'react';

// / - `<Todo />` is a component that takes in the`todo` data and displays the task to the screen.

const Todo = props => {
	return props.list.map((item, id) => (
		<li
			onClick={() => props.toggleComplete(item.id)}
			key={id}
			id={id}
			style={{
				textDecoration: item.completed ? 'line-through' : 'none'
			}}
		>
			{item.task}
		</li>
	));
};

export default Todo;
