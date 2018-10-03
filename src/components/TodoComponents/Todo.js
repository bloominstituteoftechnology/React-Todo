import React from 'react';

const Todo = props => {
	return(
		<div> 
			<ul>
				{props.toDoItems.map(todo => {
					return <li>{todo.task}</li>;
				})}
			</ul>
		</div>
	);
};


export default Todo;