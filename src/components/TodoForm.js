import React from 'react'

const TodoForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          task='taskText'
          value={props.taskText}
          onChange={props.handleChanges}
        />
        <button>Add</button>
      </form>
    )
  }

export default TodoForm