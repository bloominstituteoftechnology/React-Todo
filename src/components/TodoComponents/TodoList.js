import React from 'react';
import './Todo.css';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';


const TodoList = (props) => {
	return (
		<div>
			<Todo/>
			<TodoForm/>
		</div>
	)
}

export default TodoList;
