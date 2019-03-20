import React from "react";

function Todo(props) {
	return (
		<div className='todo-item'>
			<h1>{props.todoProp.task}</h1>
			<h3>{props.todoProp.taskDetail}</h3>
			<h3>{props.todoProp.id}</h3>
			<h3>{props.todoProp.completed}</h3>
		</div>
	);
}

export default Todo;
