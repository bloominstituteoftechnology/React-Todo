import React from 'react'

const TodoForm = props => {
  return (
    <div className="todoFormContainer">
      <input type="text" name="todo"  placeholder="yoyoyoyo" />
      <button type="submit">Add Todo</button>
      <button type="submit">Clear Completed</button>
    </div>
  )
}

export default TodoForm;