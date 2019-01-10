import React from 'react';

import './Todo.css';

function Todo(props) {
	return (
		<div className={`task ${props.id} `}>
			<input
				type="checkbox"
				checked={props.completed}
				onClick={props.handleCheckbox}
			/>
			{props.task} - <span className="timestamp">{props.date}</span>
		</div>
	);
}

export default Todo;
