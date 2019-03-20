import React from "react";

function Todo(props) {
	return (
		<div className='todo-item'>
			<h3>{props.todoProp.task}</h3>
			<h3>{props.todoProp.id}</h3>
			<h3>{props.todoProp.completed}</h3>
		</div>
	);
}

export default Todo;
