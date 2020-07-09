import React from "react";
import "./Todo.css";

function Todo (props){
	const clickHandler = (event) => {
		props.toggleCompleted(props.todo.id);
	};

	return(
		<li onClick={clickHandler} className={`task${props.todo.completed ? " completed" : ""}`}>{props.todo.task}</li>
	);
}

export default Todo;