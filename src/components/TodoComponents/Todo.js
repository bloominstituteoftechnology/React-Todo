import React from 'react';

function Todo(props) {
	return (
		<div className={props.id}>
			<input type="checkbox" />
			{props.task}
		</div>
	);
}

export default Todo;
