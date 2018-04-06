import React from 'react'

const Todo = props => {
  return (
    <div>
      <div
	className="todo"
	onClick={props.toggleTodo}>{ props.todoMessage }
	<a onClick={props.removeTodo} href="">&times;</a>
      </div>
    </div>
  )
}

export default Todo
