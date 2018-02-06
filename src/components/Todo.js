import React from 'react';

function Todo(props){
	return (
		<div className="todo">

			{props.todos.map((todo)=>{
				// check todo property complete true or false
				if(todo.complete){
					// return todo complete true with strike through
					return (
						<li key={todo.id} data-id={todo.id} onClick={props.toggleTask.bind(this, todo.id)}>
							<del>{todo.task}</del>
							<button className="btn remove-btn" data-id={todo.id} onClick={props.removeTask.bind(this, todo.id)}>Remove</button>
							<button className="btn incomplete-btn">Incomplete</button>
						</li>	
					);
				}else{
					// return todo complete false with no strike
					return (
						<li key={todo.id} data-id={todo.id} key={todo.id}>
							{todo.task}
							<button className="btn remove-btn" data-id={todo.id} onClick={props.removeTask.bind(this, todo.id)}>Remove</button>
							<button className="btn complete-btn" onClick={props.toggleTask.bind(this, todo.id)}>
								Complete
							</button>
						</li>	
					);
				}
			})}
		</div>
	)
}

export default Todo;