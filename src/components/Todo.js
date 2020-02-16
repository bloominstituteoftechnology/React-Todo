import React from 'react'

const Todo = props => {
  let verboseClassName = 'item'
  if (props.completed) {
    verboseClassName = verboseClassName + '-completed'
  }

  const handleClick = () => {
    props.toggleItem(props.id)
  }
  return (
    <div className={verboseClassName} onClick={handleClick}>
      <p>{props.task}</p>
    </div>
  )
}

export default Todo
