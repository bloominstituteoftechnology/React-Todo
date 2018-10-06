import React from 'react';
import './Todo.css';

const Todo = props => {
	return ( //returns empty array for TodoList.js
		<ul 
		style={props.task.completed ? {textDecoration: 'line-through'} : null}
		onClick={() => props.toggleTodoCompleted(props.todo.id)}>
			<li>{props.task}</li> 
		</ul>
	)	
}

export default Todo;

