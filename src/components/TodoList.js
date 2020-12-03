import React from "react";
import Todo from './Todo';
import { Button } from "reactstrap"

const TodoList = (props) => {
	return (
		<div className='todo-list'>
			{props.todoArr.map(todo => {
				return (
					<styledDiv>
				<Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
				</styledDiv>
				)
			})}
			<Button className='clear-btn'  color="success" 
			size="large" onClick={props.clearCompleted}>Clear Completed</Button>
		</div>
	);
};

export default TodoList;