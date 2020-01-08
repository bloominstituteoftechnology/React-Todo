// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo";

const TodoList = (props) => {
	console.log("Todolist:", props);
	return (
		<div>
			<h2>TodoList</h2>
			{props.todos.map(t => (
				<Todo key={t.id} task={t.task} completed={t.completed} completeTodo={props.completeTodo}/>
			))}
			<button onClick={props.clearCompleted}>Clear Completed</button>
		</div>
	)
};

export default TodoList;