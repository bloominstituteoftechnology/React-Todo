import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div>
			<Todo todo={props.list} />
		</div>
	);
};

export default TodoList;
