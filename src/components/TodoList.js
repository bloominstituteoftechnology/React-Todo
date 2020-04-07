// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div>
			{props.todos.map(todo => (
				<Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
			))}
			<button className='clear-btn' onClick={props.delTodo}>
				Clear Completed
			</button>
		</div>
	);
};

export default TodoList;