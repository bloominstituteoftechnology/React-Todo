import React from 'react'

const Todo = (props) => {
  const handleClick = () => {
    props.toggleClear(props.todo.id)
  }


  return (
    <div
      onClick={handleClick}
      className={`todo${props.todo.clear ? 'clear' : ''}`}
    >
      <p>{props.todo.name}</p>
    </div>
  )
}

export default Todo;