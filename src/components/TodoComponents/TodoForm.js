import React from 'react'

function TodoForm(props) {
  return (
    <form onSubmit={props.addNewTodo}>
      <input value={props.task} type="text" name="task" placeholder="Todo task" onChange={props.handleChanges} />
      <button type="submit">Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  )
}

export default TodoForm; 