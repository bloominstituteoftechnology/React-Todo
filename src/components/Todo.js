import React from 'react'

const Todo = (props) => {
  return (
    <div
      className={props.complete ? 'complete' : 'incomplete'}
      onClick={props.toggleTodo}>{ props.todoMessage }
    </div>
  )
}

export default Todo

