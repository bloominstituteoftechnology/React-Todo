// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div>
			<ul>
				{props.todos.map((todo) => (
					<Todo
						task={todo.task}
						key={todo.id}
						todoClick={props.todoClick}
						todo={todo}
						style={todo.completed ? { textDecoration: 'line-through' } : null}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
