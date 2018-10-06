import React from 'react';
import './Todo.css';

const Todo = props => {
	return ( //returns empty array for TodoList.js
		<ul 
		style={props.input.completed ? {textDecoration: 'line-through'} : null}
		onClick={() => props.completedTodos(props.input.id)}> 
			<li>{props.input.task}</li>
		</ul>
	)	
}

export default Todo;

 //<li>{props.task}</li>
 //onClick={() => props.toggleTodoCompleted(props.todo.id)}>