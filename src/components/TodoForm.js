import React from 'react';

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="What is your task?"
        value={props.input}
        onChange={e => props.handleChange(e)}
      />
      <button>Submit</button>
    </form>
  )
}

export default TodoForm;