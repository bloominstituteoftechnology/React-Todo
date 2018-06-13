import React from 'react';

const Todo =(props) => {
		return (
			<li 
				style={{textDecoration: props.todo.complete ? 'line-through' : 'none'}} 
			    onClick={()=>{props.onClick(props.todo.id)}}>
					{props.todo.task}
			</li>
		);
	
};

export default Todo;