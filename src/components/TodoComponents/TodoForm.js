import React from 'react'

const TodoForm = (props) => {
  return (
    <form className="TodoForm">
      <input value={props.text} onChange={props.handleInput} />
      <button onClick={props.addTask}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  )
}

export default TodoForm