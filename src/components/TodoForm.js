import React from 'react'

const TodoForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          name='taskText'
          value={props.taskText}
          onChange={props.handleChanges}
        />
        <button>Add</button>
        <button onClick={props.handleClear}>Clear</button>
      </form>
    )
  }

export default TodoForm