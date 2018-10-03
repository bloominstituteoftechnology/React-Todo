import React from 'react';


const TodoForm = props => {
	return(
		<div> 
			<form>
				<input 
					type = "text" 
					placeholder = "...todo"
					name = "newItem"
					value = {props.newItem} 
				/> 

				<button onClick = {props.addItemTodoList}> Add Todo</button>
				<button> Clear Completed </button>
			</form>
		</div>
	);
}


export default TodoForm;