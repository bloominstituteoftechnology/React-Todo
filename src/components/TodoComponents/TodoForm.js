import React from "react";
 function TodoForm(props){
	return (
		<form>
			<input value={props.inputText} onChange={props.setInput} />
			<button onClick={props.addTask}>+</button>
			<button onClick={props.clearTasks}>Clear All</button>
		</form>
	);
}
 export default TodoForm 