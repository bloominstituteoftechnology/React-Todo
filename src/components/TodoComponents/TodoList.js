import React from "react";
import Todo from "./Todo";

 function TodoList(props){
	return 
        <ul>{props.todos.map(todo => {
            return <Todo key={todo.id} todo={todo} markCompleted={props.markCompleted} />;
        })}
        </ul>;
 }

export default TodoList; 