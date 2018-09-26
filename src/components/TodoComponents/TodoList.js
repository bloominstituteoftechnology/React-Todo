import React from 'react';
// import Todo from './Todo';

const TodoList = props => {
	
	return (
		<div>
			<ol>
				{props.list.map(item => (
					<li >{item.task}</li>
				))}
			</ol>
		</div>
	);
};

export default TodoList;
