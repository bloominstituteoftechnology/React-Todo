// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList(props) {
	return (
		<div>
			{props.todoList.map(todo => {
				return (
					<Todo
						task={todo.task}
						key={todo.id}
						id={todo.id}
						completed={todo.completed}
					/>
				);
			})}
		</div>
	);
}

export default TodoList;
