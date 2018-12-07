import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

	return(
		<ul>
			{props.todos.map(task =>{ 
				return <Todo 
					key = {task.id} 
					todo = {task} 
					toggleTodo = {props.toggleTodo}/>
				})}
		</ul>
	);
};
        

export default TodoList;