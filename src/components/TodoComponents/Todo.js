import React from 'react';
import './Todo.css';

const Todo = props => {
	return (
		<div>
			{props.todo.map(el => (
				<div className="todo" key={el.id}>
					{el.task}
					<button>Delete</button>
				</div>
			))}
		</div>
	);
};

export default Todo;
