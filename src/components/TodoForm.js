import React from 'react'

const ToDoForm = (props) => {
  return (
    <div className='todo-form'>
      <input
        name="ToDoInput"
        value={props.formText}
        type="text"
        onChange={props.onInputChange}
        placeholder="What To-Do..."
        onKeyUp={(evt) => evt.keyCode === 13 ? props.addToDo(evt) : null}
      />
      <button onClick={props.addToDo}>Add Todo</button>
      <button onClick={props.clearComplete}>Clear Completed</button>
    </div>
  )
}

export default ToDoForm
