import React from 'react';

const Todo =(props) => {
		return (
			<li onClick={()=>{props.onClick(props.todo.id)}}>
				{props.todo.task}
			</li>
		);
	
};

export default Todo;