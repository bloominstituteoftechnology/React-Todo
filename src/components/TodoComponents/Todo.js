import React from 'react';

const Todo = props => {
	console.log(props);
	return <div>{props.task}</div>;
	// return <div>{props.todo.task}</div>;
};

export default Todo;
