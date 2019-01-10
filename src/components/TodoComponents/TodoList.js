import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
	return (
		<div className="todo-list">
			{props.list.map(todo => {
				return (
					<Todo todo={todo} key={todo.id} toggle={props.toggleCompleted} />
				);
			})}
		</div>
	);
};

export default TodoList;
