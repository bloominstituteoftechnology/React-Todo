import React from 'react';
import Todo from './Todo.js';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//takes in myProp, renders the string

const TodoList = props => {
	return (
		<div>
			{props.todos.map(x => {
				return (
					<Todo
						key={x.id}
						task={x.task}
						id={x.id}
						completed={x.completed}
						handleClick={props.handleClick}
					/>
				);
			})}
		</div>
	);
};

export default TodoList;
