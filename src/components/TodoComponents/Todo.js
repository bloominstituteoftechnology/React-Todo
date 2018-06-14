import React from 'react'

const Todo = props => {
	return (
	<li style ={props.item.completed ? {textDecoration: 'line-through'} : null} onClick={() => props.toggleComplete(props.item.id)}>{props.item.task}</li>
	)
}

export default Todo;
