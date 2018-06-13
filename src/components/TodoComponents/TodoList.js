import React, { Component } from 'react';
import Todo from './Todo'

const TodoList =(props) => {
		return (
			<div>
				<ul>
				{
					props.list.map(todo=>{
						return <Todo onClick={props.onClick} key={todo.id} todo={todo} />
					})
				}
				</ul>
			</div>
		);
}

export default TodoList;