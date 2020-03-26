import React from 'react';

const Todo = ({ task, toggleCompleted, removerItem }) => {
	return (
		<li className={`task${task.completed ? ' completed' : ''}`}>
			<span onClick={() => toggleCompleted(task.id)}>
				{task.completed ? (
					<i className="fa fa-check-square-o" aria-hidden="true" />
				) : (
					<i className="fa fa-square-o" aria-hidden="true" />
				)}
			</span>
			<span>{task.name}</span>
			<span onClick={() => removerItem(task)}>X</span>
		</li>
	);
};

export default Todo;
