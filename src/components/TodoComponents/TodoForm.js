import React, { useState } from 'react';
import { input, button, formStyle, containerStyle } from '../styles/styles';


const TodoForm = ({ dispatch }) => {

  const [taskInput, setTaskInput] = useState('')

  const handleChanges = e => {
    setTaskInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTaskInput('')
  }

  return (
    <div style={containerStyle}>
      <form style={formStyle} 
      onSubmit={handleSubmit}>
        <input style={input}
          type="text"
          placeholder="add a task here"
          name="addTask"
          value={taskInput}
          onChange={handleChanges}
        />

        <button style={button}
        onClick={() => {
          dispatch({ 
            type: 'ADD_TASK',
            payload: taskInput 
          })
        }}>Add</button>
      </form>
    </div>
  )
}

export default TodoForm