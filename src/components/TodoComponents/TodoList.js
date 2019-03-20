import React from "react";
import Todo from "./Todo";
function TodoList(props) {
	return props.todoState.todoOGList.map((todoFromMap, index) => (
		<Todo key={index} todoProp={todoFromMap} />
	));
}
export default TodoList;
