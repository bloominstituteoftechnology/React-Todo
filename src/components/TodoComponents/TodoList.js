import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
	return (
		<div className="todo-list">
			<Todo todo={props.list} />
		</div>
	);
};

export default TodoList;
