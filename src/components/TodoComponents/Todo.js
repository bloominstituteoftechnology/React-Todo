import React from 'react';

import './Todo.css';

function Todo(props) {
	return (
		<div className={`task ${props.id} `}>
			<input type="checkbox" />
			{props.task}
		</div>
	);
}

export default Todo;
