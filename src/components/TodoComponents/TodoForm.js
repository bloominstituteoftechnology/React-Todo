import React from 'react'

const TodoForm = (props) => {
  return (
    <div>
      <form type='submit' onSubmit={props.onSubmit}>
        <input
          ref={(input) => input && input.focus()}
          type='text'
          placeholder='Add Todo'
          value={props.task}
          onChange={props.onChange}
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
      <button onClick={props.handleremove}>Clear Completed</button>
    </div>
  )
}

export default TodoForm
