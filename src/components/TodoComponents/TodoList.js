// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div>
			{props.dailyTodos.map(todo => {
				return (
					<Todo 
						key={todo.id}
						id={todo.id}
						task={todo.task}
						completedTodos={props.toggleTodoCompleted}
					/>
					);
			})}	
			
		</div>
	)

};

export default TodoList;