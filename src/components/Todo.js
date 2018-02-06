import React from 'react';

function Todo(props){
	return (
		<div>
			{props.todos.map((todo, i)=>{
				// check todo complete true or false
				if(todo.complete){
					// return todo complete true with strike through
					return <li onClick={props.toggleTask.bind()} key={i}><del>{todo.task}</del></li>
				}else{
					// return todo complete alse with no strike
					return <li onClick={props.toggleTask.bind()} key={i}>{todo.task}</li>
				}
			})}
		</div>
	)
}

export default Todo;