import React from 'react';
// import Todo from './Todo';

const TodoList = props => {
	
	return (
		<div>
			<ul>
				{props.list.map(item => (
					<li>{item.task}</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
