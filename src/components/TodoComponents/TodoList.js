import React from 'react'
import Todo from './Todo'
import "./Todo.css"

const TodoList = props => {
	return (
		<div>
			<ul className="ul">
				<Todo
					list={props.list}
					id={props.id}
					toggleComplete={props.toggleComplete}
				/>
			</ul>
		</div>
	);
};

export default TodoList;
