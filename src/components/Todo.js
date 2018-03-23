import React from 'react'

const Todo = (props) => {
  return (
    <div
      onClick={props.toggleTodo}>{ props.todoMessage }
    </div>
  )
}

export default Todo

//      className={props.complete ? 'complete' : 'incomplete'}
