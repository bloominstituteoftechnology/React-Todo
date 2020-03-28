import React from 'react';
import Todo from './Todo';

const TodoList = ({ tasks, toggleCompleted, removerItem }) => {
	return (
		<div className="todo-wrapper">
			<h3>My To-Do List</h3>
			<hr />
			<ul>
				{tasks.length > 0
					? tasks.map(task => (
							<Todo
								key={task.id}
								task={task}
								toggleCompleted={toggleCompleted}
								removerItem={removerItem}
							/>
					  ))
					: null}
			</ul>
		</div>
	);
};

export default TodoList;
