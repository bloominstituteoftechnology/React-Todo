import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div>
			<ol>
				<Todo
					list={props.list}
					id={props.id}
					toggleComplete={props.toggleComplete}
				/>
			</ol>
		</div>
	);
};

export default TodoList;
