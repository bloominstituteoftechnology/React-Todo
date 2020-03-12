import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	console.log(props.tasks, 'props.tasks in TodoList');
	return (
		<ul>
			{props.tasks.map(task => (
				<Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted} />
			))}
		</ul>
	);
};

export default TodoList;
