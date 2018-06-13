import React, { Component } from 'react';
import Todo from './Todo'

const TodoList =(props) => {
		return (
			<div>
				<ul>
				{
					props.list.map(todo=>{
						return <Todo onClick={props.onClick} key={todo.id} todo={todo} />
						console.log(props.onClick)
					})
				}
				</ul>
			</div>
		);
}

export default TodoList;