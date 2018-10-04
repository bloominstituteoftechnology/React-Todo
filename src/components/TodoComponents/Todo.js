import React from 'react';
import './Todo.css';

const Todo = props => {
	return (
		<ul>
			{props.dailyTodos.map(input => {
				return <li key={Math.random()}>{input}</li>;
				})
			}
		</ul>
	);
};

export default Todo;