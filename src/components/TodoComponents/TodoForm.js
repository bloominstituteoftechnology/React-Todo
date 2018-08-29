import React from 'react'

const TodoForm = (props) => {
  return (
    <form className="TodoForm">
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addUser}>Add Todo</button>
      <button onClick={props.addUser}>Clear Completed</button>
    </form>
  )
}

export default TodoForm