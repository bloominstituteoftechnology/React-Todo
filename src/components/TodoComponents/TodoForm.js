import React from 'react'
import Todo from './Todo'

const TodoForm = (props) => {
  return (
    <div className="TodoForm">
      <input name="task" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  )
}

export default TodoForm