import React from "react";

function TodoForm(props){
	return (
		<form>
			<input value={props.inputText} onChange={props.handleInput} />
			<button onClick={props.addTodo}>Add todo</button>
			<button onClick={props.clearTodos}>Clear</button>
		</form>
	);
}

export default TodoForm