import React from 'react';
import './Todo.css';

const Todo = props => {
	return ( //returns empty array for TodoList.js
		<ul>
			<li>{props.task}</li> 
		</ul>
	)	
}


export default Todo;

///{props.dailyTodos.map(input => {
			//	return <li key={Math.random()}>{input.task}</li>;
			//	})			
			//}