// your components will all go in this `component` directory.
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList (props){
		return(
			<div>
				<h1>Todo list:</h1>
				<ul>
				{props.todos.map((todo, i) => (
					<Todo key={i} todo={todo} toggleCompleted={props.toggleCompleted} />
				))}
					
				
				</ul>
				<TodoForm addTodo={props.addTodo} clearCompleted={props.clearCompleted} />
			</div>
		);
}

export default TodoList;
