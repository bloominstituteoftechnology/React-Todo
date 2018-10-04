import React from 'react'
import './Todo.css'
const Todo = ({ todo, toggleComplete }) => (
	<div
		onClick={() => toggleComplete(todo.id)}
		className={`todo-item ${todo.completed ? 'completed' : ''}`}
	>
		{todo.task}
	</div>
)

export default Todo
