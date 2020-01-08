import React from 'react';
import './Todo.css'

const Todo = (props) => {
	// console.log("Todo:", props);
	return (
		<div className='todo' onClick={() => props.completeTodo(props.todo.id)}>
			<p>Task: {props.todo.task}</p>
			<p>Completed: {props.todo.completed.toString()}</p>
		</div>
	)
};

export default Todo;