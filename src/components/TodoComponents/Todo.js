import React from 'react'

const Todo = props => {
	return (
	<li style ={color: 'blue'}>{props.item.task}</li>
	)
}

export default Todo;

// props.item.completed ? style="text-decoration: strikethrough" : style = "text-decoration: null"
