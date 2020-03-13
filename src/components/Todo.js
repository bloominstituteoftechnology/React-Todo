import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

const Todo = props => {
	return (
		<li
			className={`task${props.task.completed ? ' completed' : ''}`}
			onClick={e => props.toggleCompleted(props.task.id)}
		>
			<span>
				{props.task.completed ? (
					<FontAwesomeIcon icon={faCheckSquare} />
				) : (
					<FontAwesomeIcon icon={faSquare} />
				)}
			</span>
			{props.task.name}
		</li>
	);
};

export default Todo;
