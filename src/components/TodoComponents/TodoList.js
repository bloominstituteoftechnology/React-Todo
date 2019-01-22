import React from 'react';
import Todo from './Todo';

function TodoList(props) {
	return (
		<div>
			{props.todoList.map(todo => {
				return (
					<Todo
						todo={todo}
						key={todo.id}
						handleCheckbox={props.handleCheckbox}
					/>
				);
			})}
		</div>
	);
}

export default TodoList;
