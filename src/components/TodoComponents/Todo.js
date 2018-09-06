import React from 'react';

const Todo = (props) => {
	return <li onClick={() => props.todoClick(props.todo.id)}>{props.task}</li>;
};

export default Todo;
