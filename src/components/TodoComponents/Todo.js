import React from 'react';
import './Todo.css';

const Todo = props => {
	return (
		<ul>
			{props.dailyTodos.map(input => {
				return <li key={Math.random()}>{input.task}</li>;
				})
			}
		</ul>
	);
};

export default Todo;