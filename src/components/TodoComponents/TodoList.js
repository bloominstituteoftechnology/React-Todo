import React from "react";
import Todo from "./Todo";

 function TodoList(props){
	return <ul>{props.todos.map(todo => <Todo todo={todo} />)}</ul>;
}
 export default TodoList; 