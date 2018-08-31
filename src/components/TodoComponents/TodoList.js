// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList(props){
	return (
		<ul>{props.todos.map(todoItem => <Todo todos={props.todos} classes={todoItem.classes} task={todoItem.task} key={todoItem.id} id={todoItem.id} toggle={props.toggle} />)}</ul>
	);
}

export default TodoList;