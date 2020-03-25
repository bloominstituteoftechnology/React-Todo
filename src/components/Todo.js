import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleCompleted, removerItem }) => {
	return (
		<li className={`task${task.completed ? ' completed' : ''}`}>
			<span onClick={e => toggleCompleted(task.id)}>
				{task.completed ? (
					<FontAwesomeIcon icon={faCheckSquare} />
				) : (
					<FontAwesomeIcon icon={faSquare} />
				)}
			</span>
			<span>{task.name}</span>
			<span onClick={() => removerItem(task)}>X</span>
		</li>
	);
};

export default Todo;
